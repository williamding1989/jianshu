import React , { Component } from 'react'
import {
	HomeWrapper,
	HomeLeft,
	HomeRight,
	BackTop
} from './style'
import homeBanner from '../../static/home/home-banner.png'
import List from './component/List'
import Recommend from './component/Recommend'
import Topic from './component/Topic'
import Writter from './component/Writter'
import {
	get_topiclist_action,
	get_articlelist_action
} from './store/actionCreator'
import store from '../../store'


class Home extends Component{
	constructor(props){
		super(props)
		this.state = {}
		this.getData = this.getData.bind(this)
		this.scrollTop = this.scrollTop.bind(this)
		store.subscribe(this.getData)
	}
	componentDidMount(){
		store.dispatch(get_topiclist_action())
		store.dispatch(get_articlelist_action())
	}
	componentWillUnmount(){
		this.setState =  ()=> {
			return
		}
	}
	render (){
		return (
			<HomeWrapper>
				<HomeLeft>
					<img alt='banner' className='banner-image' src={homeBanner}></img>
					<Topic topicList={this.state.topicList}/>
					<List  articleList={this.state.articleList}/>
				</HomeLeft>
				<HomeRight>
					<Recommend/>
					<Writter/>
				</HomeRight>
				<BackTop onClick={this.scrollTop}>返回</BackTop>
			</HomeWrapper>
		)
	}
	getData(){
		let data = store.getState()
		this.setState({
			topicList: data.get('home').get('topicList'),
			articleList:data.get('home').get('articleList'),
		})
	}
	scrollTop(){
		window.scrollTo(0,0)
	}
}

export default Home