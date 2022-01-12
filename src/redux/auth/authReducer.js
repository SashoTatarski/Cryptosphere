import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_SUCCESS
} from './authTypes';
const user = JSON.parse(localStorage.getItem('user'));

const initialState = user
  ? { isLoggedIn: true, user, error: '' }
  : { isLoggedIn: false, user: null, error: '' };

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        error: payload.error
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        error: payload.error
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        user: { ...user, user: payload.user },
        error: null
      };
    case UPDATE_USER_FAIL:
      return {
        ...state,
        user: null,
        error: payload.error
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };
    default:
      return state;
  }
};
export default reducer;
