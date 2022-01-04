import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS
} from './userTypes';

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  };
};

export const fetchUserSuccess = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error
  };
};

export const fetchUser = (values) => {

  return function (dispatch) {
    dispatch(fetchUserRequest);
    fetch('http://localhost:8000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchUserSuccess(data));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUserFailure(errorMsg));
      });
  };
};
