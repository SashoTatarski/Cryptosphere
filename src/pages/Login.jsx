import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../redux';
import { useNavigate } from 'react-router-dom';

import {
  SFlexContainer,
  SForm,
  StyledButton,
  StyledError,
  StyledInput,
  StyledTitle,
  IconStyleWrapper,
  SmallStyledTitle,
  SRedirectLabel,
  SRedirect,
  SRedirectLink
} from '../components';

const Login = ({ userData, fetchUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    fetchUser({ password, email });
    userData.isLoggedIn ? navigate('dashboard') : null;
  };

  return (
    <SFlexContainer>
      <IconStyleWrapper />
      <StyledTitle>Login</StyledTitle>
      <SmallStyledTitle>Sign in to your account</SmallStyledTitle>
      <SForm onSubmit={onSubmit}>
        <br></br>
        <StyledInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <StyledInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {userData.error ? <StyledError>{userData.error}</StyledError> : null}
        <StyledButton>Login</StyledButton>
        <SRedirect>
          <SRedirectLabel>{"Don't have an account?"}&nbsp;</SRedirectLabel>
          <SRedirectLink to={'/register'}>{'Register'}</SRedirectLink>
        </SRedirect>
      </SForm>
    </SFlexContainer>
  );
};
const mapStateToProps = (state) => {
  return {
    userData: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (values) => dispatch(fetchUser(values))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
