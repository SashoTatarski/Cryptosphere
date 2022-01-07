import React, { useState } from 'react';

import {
  SFlexContainer,
  SForm,
  StyledButton,
  StyledError,
  StyledInput,
  StyledTitle,
  IconStyleWrapper,
  SmallStyledTitle,
  StyledText,
  SRedirect,
  SRedirectLabel,
  SRedirectLink
} from '../components';
export const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = (e) => {};
  return (
    <SFlexContainer>
      <IconStyleWrapper />
      <StyledTitle>Register</StyledTitle>

      <SForm onSubmit={onSubmit}>
        <br></br>
        <StyledInput
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <StyledInput
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

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
        <StyledInput
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <StyledButton>Register</StyledButton>
        <SRedirect>
          <SRedirectLabel>{'Already have an account?'}&nbsp;</SRedirectLabel>
          <SRedirectLink to={'/'}>{'Login'}</SRedirectLink>
        </SRedirect>
      </SForm>
    </SFlexContainer>
  );
};

export default Register;
