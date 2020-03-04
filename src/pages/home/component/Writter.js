import React , { Component } from 'react'
import{
	WritterWrapper,
	WritterTitle,
	WritterItem
} from '../style'
import pic1 from '../../../static/home/writter/1.webp'
import pic2 from '../../../static/home/writter/2.webp'
import pic3 from '../../../static/home/writter/3.webp'
import pic4 from '../../../static/home/writter/4.webp'
import pic5 from '../../../static/home/writter/5.webp'


class Writter extends Component{
	render (){
		return (
			<WritterWrapper>
				<WritterTitle>推荐作者</WritterTitle>
				<WritterItem>
					<img alt='作者' className='pic' src={pic5} ></img>
					<div className='contentbox'>
						<div className='userName'>董克平日记</div>
						<div className='userResult'>写了833.9k字 · 2.7k喜欢</div>
					</div>
				</WritterItem>
				<WritterItem>
					<img alt='作者' className='pic' src={pic3} ></img>
					<div className='contentbox'>
						<div className='userName'>吴晓布</div>
						<div className='userResult'>写了739.1k字 · 24.7k喜欢</div>
					</div>
				</WritterItem>
				<WritterItem>
					<img alt='作者' className='pic' src={pic2}></img>
					<div className='contentbox'>
						<div className='userName'>卢璐说</div>
						<div className='userResult'><p>写了1382.2k字 · 28.5k喜欢</p></div>
					</div>
				</WritterItem>
				<WritterItem>
					<img alt='作者' className='pic' src={pic1} ></img>
					<div className='contentbox'>
						<div className='userName'>无限猴子</div>
						<div className='userResult'>写了435.3k字 · 2.3k喜欢</div>
					</div>
				</WritterItem>
				<WritterItem>
					<img alt='作者' className='pic' src={pic4}></img>
					<div className='contentbox'>
						<div className='userName'>三儿王屿</div>
						<div className='userResult'>写了169.2k字 · 3.6k喜欢</div>
					</div>
				</WritterItem>
			</WritterWrapper>
		)
	}
}

export default Writter