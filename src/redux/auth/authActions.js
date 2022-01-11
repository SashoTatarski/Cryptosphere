import { showModal } from '../modal/modalActions';
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT
} from './authTypes';

const loginUserSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: { user: data }
  };
};

const loginUserFailure = (error) => {
  return {
    type: LOGIN_FAIL,
    payload: { error: error }
  };
};

export const fetchUser = (values) => {
  return function (dispatch) {
    fetch('http://localhost:8000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
      .then((data) => data.json())
      .then((data) =>
        data.access_token && data.user
          ? dispatch(loginUserSuccess(data))
          : dispatch(loginUserFailure(data.error))
      );
  };
};

const registerUserSuccess = () => {
  return {
    type: REGISTER_SUCCESS
  };
};

const registerUserFailure = (error) => {
  return {
    type: REGISTER_FAIL,
    payload: { error: error }
  };
};

export const createUser = (values) => {
  return function (dispatch) {
    fetch('http://localhost:8000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
      .then((data) => data.json())
      .then((data) =>
        data?.message
          ? dispatch(registerUserSuccess()) &&
            dispatch(showModal({ title: 'Registration Completed Successfully!' }))
          : dispatch(registerUserFailure(data?.error))
      )
      .catch((e) => {
        dispatch(registerUserFailure(e));
      });
  };
};
export const logoutUser = () => {
  return {
    type: LOGOUT
  };
};
