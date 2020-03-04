import {
	FOCUSE_INPUT,
	BLUR_INPUT,
	GET_LIST,
	HANDLE_MOUSE_ENTER,
	HANDLE_MOUSE_LEAVE,
	HANDLE_CHANGE_PAGE
} from './actionTypes'
import { fromJS } from 'immutable'

//变成immutable对象  不可修改
const defaultState = fromJS({
	focused: false,
	list:[],
	page: 1,
	totlePage: 2,
	mouseIn:false
})

//reducer 可以接受state，但是绝对不能修改原始state
export default (state = defaultState,action) => {
	if( action.type === FOCUSE_INPUT ){
		return state.set('focused',true)
	}
	if( action.type === BLUR_INPUT ){
		return state.set('focused',false)
	}
	if( action.type === GET_LIST ){
		return state.set('list',action.value).set('totlePage',action.totlePage)
	}
	if( action.type === HANDLE_MOUSE_ENTER ){
		return state.set('mouseIn',true)
	}
	if( action.type === HANDLE_MOUSE_LEAVE ){
		return state.set('mouseIn',false)
	}
	if( action.type === HANDLE_CHANGE_PAGE ){
		return state.set('page',action.val)
	}
	return state
}
