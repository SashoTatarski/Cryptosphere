import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
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
  SRedirectLink,
  SFlexDiv
} from '../components';

const Login = ({ userData, fetchUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    fetchUser(data);
  };

  useEffect(() => {
    let active = true;
    userData.isLoggedIn ? navigate('dashboard') && active === true : null;
    return () => {
      active = false;
    };
  }, [userData.isLoggedIn]);

  return (
    <SFlexDiv>
      <SFlexContainer>
        <IconStyleWrapper />
        <StyledTitle>Login</StyledTitle>
        <SmallStyledTitle>Sign in to your account</SmallStyledTitle>
        <SForm onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
            type=""
            placeholder="Email"
            {...register('email', { required: true })}
            validationFailed={errors.email}
          />

          <StyledInput
            type="password"
            placeholder="Password"
            {...register('password', { required: true })}
            validationFailed={errors.password}
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
      </SFlexContainer>
    </SFlexDiv>
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
