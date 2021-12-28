import React, { useState } from 'react';

const Login = () => {
  [email, setEmail] = React.useState('');
  [password, setPassword] = React.useState('');
  const onSubmit = (e) => {
    e.preventDefault();

    console.log(password, email);
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

export default Login;
