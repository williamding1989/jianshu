import{
	GET_TOPICLIST,
	GET_ARTICLELIST
} from './actionTypes'
import axios from 'axios'
import config from '../../../config'

const get_topiclist_action = () => {
	return (dispatch)=>{
		axios.get(config.apiUrl+'/topicList.json').then((res)=>{
			const action = {
				type: GET_TOPICLIST,
				val: res.data
			}
			dispatch(action)
		})
	}
}

const get_articlelist_action = () => {
	return (dispatch)=>{
		axios.get(config.apiUrl+'/articleList.json').then((res)=>{
			const action = {
				type: GET_ARTICLELIST,
				val: res.data
			}
			dispatch(action)
		})
	}
}


export {
	get_topiclist_action,
	get_articlelist_action
}
