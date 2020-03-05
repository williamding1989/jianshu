import React  from 'react'
import {
	TopicWrapper,
	TopicItem
} from '../style'

const Topic = (props) =>{
	return (
		<TopicWrapper>	
			{
				props.topicList.map((val,index)=>{
					return (
						<TopicItem key={val.id} >
							<img alt='topicimg' className='topic-pic' src={val.imgUrl}></img>
							{val.content}
						</TopicItem>	
					)
				})	
			}
		</TopicWrapper>
	)
}

//组件数据的默认值
Topic.defaultProps = {
	topicList: []
}

export default Topic