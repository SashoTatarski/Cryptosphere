import fs from 'fs';
import bodyParser from 'body-parser';
import jsonServer from 'json-server';
import jwt from 'jsonwebtoken';

const server = jsonServer.create();
const userdb = JSON.parse(fs.readFileSync('./users.json', 'utf-8'));

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const SECRET_KEY = '72676376';

const expiresIn = '1h';

function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

function isLoginAuthenticated({ email, password }) {
  return (
    userdb.users.findIndex(
      (user) => user.email === email && user.password === password
    ) !== -1
  );
}
function filteredUsers({ email, password }) {
  const filteredUsers = userdb.users.filter((user) => {
    return user.email === email && user.password === password;
  });
  return {
    id: filteredUsers[0].id,
    name: filteredUsers[0].name,
    email: filteredUsers[0].email
  };
}

function isRegisterAuthenticated({ email }) {
  return userdb.users.findIndex((user) => user.email === email) !== -1;
}

server.post('/api/auth/register', (req, res) => {

  const { firstName, lastName, email, password } = req.body;
  if (isRegisterAuthenticated({ email })) {
    const status = 401;
    const message = 'Email already exist';
    res.status(status).json({ error: message });
    return;
  }

  fs.readFile('./users.json', (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }
    data = JSON.parse(data.toString());

    let last_item_id = data.users[data.users.length - 1].id;

    data.users.push({
      id: last_item_id + 1,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    });
    let writeData = fs.writeFile(
      './users.json',
      JSON.stringify(data),
      (err, result) => {
        if (err) {
          const status = 401;
          const message = err;
          res.status(status).json({ status, message });
          return;
        }
      }
    );
  });

  res.status(200).json({message:'Successs'});
});

server.post('/api/auth/login', (req, res) => {

  const { email, password } = req.body;
  if (!isLoginAuthenticated({ email, password })) {
    res.status(401).json({ error: 'Incorrect Email or Password' });
  } else {
    const access_token = createToken({ email, password });
    const user = filteredUsers({ email, password });

    res.status(200).json({ access_token, user });
  }
});

server.listen(8000, () => {
  console.log('Running fake api json server');
});
