import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../redux/auth/authActions';

const Login = ({ userData, fetchUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    fetchUser({ password, email });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
const mapStateToProps = (state) => {
  return {
    userData: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (values) => dispatch(fetchUser(values))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
