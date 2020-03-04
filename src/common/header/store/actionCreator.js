import {
	FOCUSE_INPUT,
	BLUR_INPUT,
	GET_LIST,
	HANDLE_MOUSE_ENTER,
	HANDLE_MOUSE_LEAVE,
	HANDLE_CHANGE_PAGE
} from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'
import config from '../../../config'

const focuse_input_action = () => ({
	type: FOCUSE_INPUT
})

const blur_input_action = () => ({
	type: BLUR_INPUT
})

const mouse_enter_action = () => ({
	type: HANDLE_MOUSE_ENTER
})

const mouse_leave_action = () => ({
	type: HANDLE_MOUSE_LEAVE
})

const change_page_action = (val) => ({
	type: HANDLE_CHANGE_PAGE,
	val: val+1
})

const get_list_action = () => {
	return (dispatch) => {
		axios.get(config.apiUrl+'/headerList.json').then((res)=>{
			const action = {
				type: GET_LIST,
				value: fromJS(res.data),
				totlePage: Math.ceil(res.data.length / 10)
			}
			dispatch(action)
		})
	}
}

export {
	focuse_input_action,
	blur_input_action,
	get_list_action,
	mouse_enter_action,
	mouse_leave_action,
	change_page_action
}
