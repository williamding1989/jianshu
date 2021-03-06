import React , { Component } from 'react'
import {
	TopicWrapper,
	TopicItem
} from '../style'

class Topic extends Component{
	render (){
		const { topicList } = this.props
		return (
			<TopicWrapper>		
				{
					topicList.map((val,index)=>{
						return (
							<TopicItem key={val.id}>
								<img alt='topicimg' className='topic-pic' src={val.imgUrl}></img>
								{val.content}
							</TopicItem>	
						)
					})	
				}
			</TopicWrapper>
		)
	}
}

//组件数据的默认值
Topic.defaultProps = {
	topicList: []
}

export default Topic