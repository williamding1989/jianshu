import React , { Component } from 'react'
import {
	DetailWrapper,
	Header,
	Content
} from './style'
import pic1 from '../../static/detail/1.webp'

class Detail extends Component{
	constructor(props){
		super(props)
		this.state  = {
			title:''
		}
	}
	componentDidMount(){
		this.setState({
			title:this.props.location.query.title
		})
	}
	render (){
		return (
			<DetailWrapper>
				<Header>{this.state.title}</Header>
				<Content>
					<p>又到年底，大家都关注同一个问题——“今年有多少年终奖？”</p>
					<img alt='图片' src={pic1}></img>
					<p>每年年底，朋友圈都成了大型“炫富”现场——拿到年终奖的人不是晒工资条，就是晒出一整沓软妹币，而拿不到的人，根本不好意思发朋友圈。</p>
					<p>有人干脆说，从年终奖可以看出一个公司的格局。</p>
					<p>年终奖关乎每个人的利益，但我们更想讨论的是——</p>
					<p>那些因为年终奖而辞职的人，后来过得怎么样。</p>
				</Content>
			</DetailWrapper>
		)
	}
}

export default Detail