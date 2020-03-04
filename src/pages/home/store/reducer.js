import {
	GET_TOPICLIST,
	GET_ARTICLELIST
} from './actionTypes'
import { fromJS } from 'immutable'

//变成immutable对象  不可修改
const defaultState = fromJS({
	topicList:[],
	articleList:[]
})

//reducer 可以接受state，但是绝对不能修改原始state
export default (state = defaultState,action) => {
	if( action.type === GET_TOPICLIST ){
		return state.set('topicList',action.val)
	}
	if( action.type === GET_ARTICLELIST ){
		return state.set('articleList',action.val)
	}
	return state
}
