import React from 'react';
import { useForm } from 'react-hook-form';
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
  SRedirectLink
} from '../components';
export const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = (e) => {};

  const password = watch('password');
  return (
    <SFlexContainer>
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
