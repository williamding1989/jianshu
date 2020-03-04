import React, { Component } from 'react';
import store from '../../store'
import {
	WriteWrapper
} from './style'

class Write extends Component {
	constructor(props){
		super(props)
		this.state = {}
		this.getData = this.getData.bind(this)
	}
	componentDidMount(){
		this.getData()
	}
	render() {
		return (
			<WriteWrapper>可以写文章啦~~</WriteWrapper>
		)
	}
	getData(){
		let loginStatus = store.getState().get('login').get('login')
		console.log('loginStatus',loginStatus)
		this.setState({
			loginStatus
		})	
		console.log('this.state.loginStatus',this.state.loginStatus)
	}
}

export default Write;