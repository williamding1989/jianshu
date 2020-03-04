import React , { Component ,Fragment } from 'react'
import { 
	HeaderWrapper,
	Logo, 
	Nav,
	NavItem, 
	NavSearch,
	Addition,
	Button,
	SearchWrapper,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoItem
} from './style'
import store from '../../store'
import {
	focuse_input_action,
	blur_input_action,
	get_list_action,
	mouse_enter_action,
	mouse_leave_action,
	change_page_action
} from './store/actionCreator'
import {
	logout_action
} from '../../pages/login/store/actionCreator'
import { Link } from 'react-router-dom'


class Header extends Component {
	constructor(props){
		super(props)
		this.state = {}
		this.focuseInput = this.focuseInput.bind(this)
		this.blurInput = this.blurInput.bind(this)
		this.getData = this.getData.bind(this)
		this.getSearchList = this.getSearchList.bind(this)
		this.handleMouseEnter = this.handleMouseEnter.bind(this)
		this.handleMouseLeave = this.handleMouseLeave.bind(this)
		this.handleChangePage = this.handleChangePage.bind(this)
		this.handleLoginout = this.handleLoginout.bind(this)
		this.hanbldRegister = this.hanbldRegister.bind(this)
		store.subscribe(this.getData)
	}
	componentDidMount(){
		this.getData()
	}
	getSearchList (){
		const { focused , list , page , mouseIn} = this.state
		const newList =  list && list.toJS()
		const pageList = []
		for( let i = (page-1)*10 ;i < page *10 ;i++){
			newList[i] && pageList.push(newList[i])
		}
		if(focused || mouseIn){
			return (
				<SearchInfo 
					onMouseEnter = {this.handleMouseEnter}
					onMouseLeave = {this.handleMouseLeave}>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch onClick={this.handleChangePage}>换一批</SearchInfoSwitch>
					</SearchInfoTitle>
					{
						pageList.map((val,index)=>{
							return (
								<SearchInfoItem key={val}>{val}</SearchInfoItem>
							)
						})
					}
				</SearchInfo>
			)
		}
	}
	render(){
		return (
			<HeaderWrapper>
				<Link to='/'>
					<Logo/>
				</Link>
				<Nav>
					<NavItem className='left active'>首页</NavItem>
					<NavItem className='left'>下载App</NavItem>
					{
						this.state.login ? <NavItem className='right' onClick={this.handleLoginout}><span>您好,{this.state.userName}</span>退出</NavItem>: 
						<Link to='/login'>
							<NavItem className='right'>登录</NavItem>
						</Link>
					}
					<NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem>
					<SearchWrapper>
						<NavSearch 
							className={this.state.focused?'focused':''}
							onFocus={this.focuseInput}
							onBlur={this.blurInput}
						>
						</NavSearch>
						<i className= {this.state.focused?'focused iconfont':'iconfont'}>&#xe617;</i>
						{this.getSearchList()}
					</SearchWrapper>
				</Nav>
				<Addition>
					{
						this.state.login ? 
						<Link to='/write'>
							<Button className='writting'><i className='iconfont'>&#xe6e5;</i>写文章</Button>
						</Link>:
						<Fragment>
							<Link to='/login'>
								<Button className='writting'><i className='iconfont'>&#xe6e5;</i>写文章</Button>
							</Link>
							<Button className='reg' onClick={this.hanbldRegister}>注册</Button>
						</Fragment>
					}
				</Addition>
			</HeaderWrapper>
		)
	}
	getData(){
		let data = store.getState()
		this.setState({
			focused: data.get('header').get('focused'),
			list: data.get('header').get('list'),
			page: data.get('header').get('page'),
			mouseIn: data.get('header').get('mouseIn'),
			totlePage: data.get('header').get('totlePage'),
			login: data.get('login').get('login'),
			userName:  data.get('login').get('userName'),
		})
	}
	focuseInput (){
		store.dispatch(focuse_input_action())
		store.dispatch(get_list_action())
	}
	blurInput (){
		store.dispatch(blur_input_action())
	}
	handleMouseEnter (){
		store.dispatch(mouse_enter_action())
	}
	handleMouseLeave (){
		store.dispatch(mouse_leave_action())
	}
	handleChangePage () {
		const { page , totlePage} = this.state
		if( page < totlePage){
			store.dispatch(change_page_action(page))
		}
	}
	handleLoginout(){
		store.dispatch(logout_action())
	}
	hanbldRegister(){
		alert('请直接登录^_^')
	}
}
export default  Header
