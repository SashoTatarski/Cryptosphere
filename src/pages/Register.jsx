import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import {
  SFlexContainer,
  SForm,
  StyledButton,
  StyledError,
  StyledInput,
  StyledTitle,
  IconStyleWrapper,
  SRedirect,
  SRedirectLabel,
  SRedirectLink,
  Modal,
  SFlexDiv
} from '../components';
import { createUser } from '../redux';

export const Register = ({ userData, createUser }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    createUser(data);
    reset();
  };

  const password = watch('password');
  return (
    <SFlexDiv>
      <SFlexContainer>
        <Modal />
        <IconStyleWrapper />
        <StyledTitle>Register</StyledTitle>

        <SForm onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
            placeholder="First Name"
            {...register('firstName', { required: true })}
            validationFailed={errors.firstName}
          />
          <StyledInput
            placeholder="Last Name"
            {...register('lastName', { required: true })}
            validationFailed={errors.lastName}
          />

          <StyledInput
            type="email"
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
          <StyledInput
            type="password"
            placeholder="Confirm Password"
            {...register('confirmPassword', {
              validate: (value) => value === password || 'The passwords do not match'
            })}
            validationFailed={errors.confirmPassword}
          />
          {errors.confirmPassword && (
            <StyledError>{errors.confirmPassword.message}</StyledError>
          )}
          {userData.error ? <StyledError>{userData.error}</StyledError> : null}
          <StyledButton type="submit">Register</StyledButton>
          <SRedirect>
            <SRedirectLabel>{'Already have an account?'}&nbsp;</SRedirectLabel>
            <SRedirectLink to={'/'}>{'Login'}</SRedirectLink>
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
    createUser: (values) => dispatch(createUser(values))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
