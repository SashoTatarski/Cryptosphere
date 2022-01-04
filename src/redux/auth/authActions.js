import { SET_MESSAGE } from '../message/messageTypes';
import { LOGIN_FAIL, LOGIN_SUCCESS } from './authTypes';

export const loginUserSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: { user: data }
  };
};

export const loginUserFailure = () => {
  return {
    type: LOGIN_FAIL
  };
};

export const message = (error) => {
  return {
    type: SET_MESSAGE,
    payload: error
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
      .then((res) => res.json())
      .then((data) => {
        const { error } = data;
        if (error) {
          dispatch(loginUserFailure());

          dispatch(message(error));
        } else {
          dispatch(loginUserSuccess(data));
        }
      });
  };
};
