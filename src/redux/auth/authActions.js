import { LOGIN_FAIL, LOGIN_SUCCESS } from './authTypes';

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
          ? dispatch(loginUserSuccess(data)) &&
            localStorage.setItem('user', JSON.stringify(data))
          : dispatch(loginUserFailure(data.error))
      );
  };
};
