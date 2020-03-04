import axios from 'axios';
import {
	CHANGE_LOGIN,
	LOGOUT
} from './actionTypes';
import config from '../../../config'

const changeLogin = (accout) => ({
	type: CHANGE_LOGIN,
	value: true,
	userName:accout
})

const logout_action = () => ({
	type: LOGOUT,
	value: false
})

const login_action = (accout, password) => {
	return (dispatch) => {
		axios.get(config.apiUrl+'/login.json?account=' + accout + '&password=' + password).then((res) => {
			const result = res.data.data;
			if (result) {
				dispatch(changeLogin(accout))
			}else {
				alert('登陆失败')
			}
		})
	}
}

export{
	login_action,
	logout_action
}
