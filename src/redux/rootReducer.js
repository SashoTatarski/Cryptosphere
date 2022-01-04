import { combineReducers } from 'redux';

import authReducer from './auth/authReducer';
import messageReducer from './message/messageReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  message: messageReducer
});

export default rootReducer;
