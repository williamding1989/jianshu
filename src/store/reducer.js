import { combineReducers } from 'redux-immutable';
import headerReducer from '../common/header/store/reducer'
import homeReducer from '../pages/home/store/reducer'
import loginReducer from '../pages/login/store/reducer'

export default combineReducers({
	header: headerReducer,
	home: homeReducer,
	login: loginReducer
})
