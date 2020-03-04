import { fromJS } from 'immutable';
import {
	CHANGE_LOGIN,
	LOGOUT
} from './actionTypes';

const defaultState = fromJS({
	login: false,
	userName:''
});

export default (state = defaultState, action) => {
	if(action.type === CHANGE_LOGIN){
		return state.set('login', action.value).set('userName',action.userName);
	}
	if(action.type === LOGOUT){
		return state.set('login', action.value);
	}
	return state
}