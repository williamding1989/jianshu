import React , { Component } from 'react'
import{
	RecommendWrapper,
	RecommendItem
} from '../style'
import pic1 from '../../../static/home/recommend/1.png'
import pic2 from '../../../static/home/recommend/2.png'
import pic3 from '../../../static/home/recommend/3.png'
import pic4 from '../../../static/home/recommend/4.png'

class Recommend extends Component{
	render (){
		return (
			<RecommendWrapper>
				<RecommendItem imgUrl={pic1}></RecommendItem>
				<RecommendItem imgUrl={pic2}></RecommendItem>
				<RecommendItem imgUrl={pic3}></RecommendItem>
				<RecommendItem imgUrl={pic4}></RecommendItem>
			</RecommendWrapper>
		)
	}
}

export default Recommend