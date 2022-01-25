import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../redux';
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

export const Register = () => {
  const userData = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const registerUser = (values) => dispatch(createUser(values));

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    registerUser(data);
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
            {...register('password', {
              validate: (value) =>
                value.length > 5 || 'Password must be at least 6 characters long'
            })}
            validationFailed={errors.password}
          />
          {errors.password && <StyledError>{errors.password.message}</StyledError>}
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
          {userData.error === 'Email already exist' ? (
            <StyledError>{userData.error}</StyledError>
          ) : null}
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

export default Register;
