import React , { Component } from 'react'
import { 
	ListItem,
	ListInfo,
	LoadMore
} from '../style'
import { Link } from 'react-router-dom'

class List extends Component{
	constructor(props){
		super(props)
		this.state = {
			showIndex: 2
		}
		this.loadmore = this.loadmore.bind(this)
	}
	render (){
		const { articleList  } = this.props
		return (
			<div>
				{
					articleList.map((val,index)=>{
						if(index < this.state.showIndex){
							return (
								<Link to={{pathname:'/detail',query:{title:val.title}}} key={val.id}>
									<ListItem>
										<img alt='列表图片' className='pic' src={val.imgUrl}></img>
										<ListInfo>
											<h3 className='title'>{val.title}</h3>
											<p className='desc'>{val.desc}</p>
										</ListInfo>
									</ListItem>	
								</Link>
							)			
						}else{
							return false
						}
					})
				}
				{
					this.state.showIndex < 6 && <LoadMore onClick={this.loadmore}>更多精彩内容</LoadMore>
				}
			</div>
		)
	}
	loadmore(){
		let showIndex = this.state.showIndex
		showIndex += 2
		this.setState({
			showIndex
		})
	}
}

//组件数据的默认值
List.defaultProps = {
	articleList: []
}

export default List