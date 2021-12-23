import React from 'react';

const Login = () => {


  const onSubmit = (e) => {
    e.preventDefault();

    console.log('HI');
  };

  
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input placeholder="email"></input>
        <input type="current-password" placeholder="password"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
