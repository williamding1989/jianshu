import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import store from '../../store'
import {
	login_action
} from './store/actionCreator'


class Login extends PureComponent {
	constructor(props){
		super(props)
		this.getData = this.getData.bind(this)
		this.state = {}
		store.subscribe(this.getData)
	}
	componentWillUnmount (){
		this.setState = ()=> {
			return
		}
	}
	render() {
		if (!this.state.loginStatus) {
			return (
				<LoginWrapper>
					<LoginBox>
						<Input placeholder='账号' ref={(input) => {this.account = input}}/>
						<Input placeholder='密码' type='password' ref={(input) => {this.password = input}}/>
						<Button onClick={() => this.login(this.account.value, this.password.value)}>登陆</Button>
					</LoginBox>
				</LoginWrapper>
			)
		}else {
			return <Redirect to='/'/>
		}
	}
	getData(){
		this.setState({
			loginStatus: store.getState().get('login').get('login')
		})
	}
	login(account,password) {
		store.dispatch(login_action(account,password))
	}
}



export default Login;