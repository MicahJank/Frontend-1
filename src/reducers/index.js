import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';
import { combineReducers } from 'redux';

export default rootReducer = combineReducers({ Login: LoginReducer, Register: RegisterReducer });