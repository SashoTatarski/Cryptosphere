import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  IconStyleWrapper,
  SFlexContainer,
  SFlexDiv,
  SForm,
  SmallStyledTitle,
  SRedirect,
  SRedirectLabel,
  SRedirectLink,
  StyledButton,
  StyledError,
  StyledInput,
  StyledTitle
} from '../components';
import { fetchUser } from '../redux';

const Login = () => {
  const userData = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const loginUser = (values) => dispatch(fetchUser(values));

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    loginUser(data);
  };

  useEffect(() => {
    userData.isLoggedIn ? navigate('dashboard') : null;
  }, [userData.isLoggedIn]);

  return (
    <SFlexDiv>
      <SFlexContainer>
        <IconStyleWrapper />
        <StyledTitle>Login</StyledTitle>
        <SmallStyledTitle>Sign in to your account</SmallStyledTitle>
        <SForm onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
            placeholder="Email"
            {...register('email', { required: true })}
            validationFailed={errors.email}
            // Only for dev purposes
            value="test@gmail.com"
          />

          <StyledInput
            type="password"
            placeholder="Password"
            {...register('password', { required: true })}
            validationFailed={errors.password}
            // Only for dev purposes
            value="123456"
          />

          {userData.error === 'Incorrect Email or Password' ? (
            <StyledError>{userData.error}</StyledError>
          ) : null}
          <StyledButton type="submit">Login</StyledButton>
          <SRedirect>
            <SRedirectLabel>{'Do not have an account?'}&nbsp;</SRedirectLabel>
            <SRedirectLink to={'/register'}>{'Register'}</SRedirectLink>
          </SRedirect>
        </SForm>
        <div style={{ color: 'red' }}>
          *Please use the following credentials: test@gmail.com, pass: 123456
        </div>
        <div style={{ color: 'red' }}>They should be prerendered on the form</div>
      </SFlexContainer>
    </SFlexDiv>
  );
};

export default Login;
