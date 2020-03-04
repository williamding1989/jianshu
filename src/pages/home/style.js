import styled from 'styled-components'

export const HomeWrapper = styled.div`
	width:960px;
	margin: 0 auto;
	overflow:hidden;
`
export const HomeLeft = styled.div`
	width:625px;
	float:left;
	padding-top:30px;
	.banner-image{
		width:625px;
		height:270px;
	}
`
export const HomeRight = styled.div`
	width:280px;
	height:300px;
	float:right;
`
export const TopicWrapper = styled.div`
	padding:20px 0 10px 0;
	overflow:hidden;
	margin-left:-18px;
	border-bottom:1px solid #dcdcdc;
`
export const TopicItem = styled.div`
	float:left;
	background:#f7f7f7;
	height:32px;
	margin-left:18px;
	padding-right:10px;
	line-height:32px;
	font-size:14px;
	margin-bottom:18px;
	color:#000;
	border:1px solid #dcdcdc;
	border-radius:4px;
	.topic-pic{
		display:block;
		float:left;
		width:32px;
		margin-right:10px;
		height:32px;
	}
`
export const ListItem = styled.div`
	overflow:hidden;
	padding:20px 0;
	border-bottom:1px solid #dcdcdc;
	.pic{
		border-radius:10px;
		display:block;
		width:125px;
		height:100px;
		float:right;
	}
`
export const ListInfo = styled.div`
	width:500px;
	float:left;
	.title{
		line-height:27px;
		font-size:18px;
		font-weight:bold;
		color:#333;
	}
	.desc{
		line-height:24px;
		font-size:13px;
		color:#999;
	}
`
export const RecommendWrapper = styled.div`
	width:280px;
	margin:30px 0;
`
export const RecommendItem = styled.div`
	width:280px;
	height:50px;
	background:url(${(props)=>props.imgUrl});
	background-size:contain;
`
export const WritterWrapper = styled.div`
	width:278px;
	border-radius:3px;
	text-align:center;
`
export const LoadMore = styled.div`
	width:100%;
	line-height:40px;
	text-align:center;
	background:#a5a5a5;
	border-radius:20px;
	color:#fff;
	margin:20px 0;
`
export const WritterTitle = styled.div`
	font-size: 14px;
	text-align:left;
    color: #969696;
`
export const WritterItem = styled.div`
	line-height: 20px;
	margin-top: 15px;
	overflow:hidden;
	.pic{
	    float: left;
	    width: 48px;
	    height: 48px;
	    margin-right: 10px;
	}
	.contentbox{
		float:left;
		.userName{
			padding-top: 5px;
		    margin-right: 60px;
		    font-size: 14px;
		    display: block;
		    text-align: left;
		}
		.userResult{
			margin-top: 2px;
		    font-size: 12px;
		    color: #969696;
		}	
	}
`
export const BackTop = styled.div`
	position:fixed;
	width:60px;
	height:60px;
	line-height:60px;
	text-align:center;
	border:1px solid #ccc;
	right:30px;
	bottom:30px;
	background:#222;
	color:#fff;
	border-radius:50%;
`
