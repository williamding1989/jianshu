import styled from 'styled-components'
import navLogo from '../../static/nav-logo.png'

export const HeaderWrapper = styled.div`
	position:relative;
	height:55px;
	border-bottom:1px solid #f0f0f0;
`
export const Logo = styled.div`
	position:absolute;
	top:0;
	left:0;
	display:block;
	background:url(${navLogo});
	background-size:contain;
	height:56px;
	width:100px;
`
export const Nav = styled.div`
	width:960px;
	height:100%;
	margin:0 auto;
	padding-right:70px;
	box-sizing:border-box;
`
export const NavItem = styled.div`
	&.left{
		float:left;
	}
	&.right{
		float:right;
		color:#969696;
	}
	&.active{
		color:#ea6f5a;
		font-weight:bold;
	}
	line-height:56px;
	padding:0 15px;
	font-size:16px;
	color:#333;
	span{
		font-weight:bold;
		margin-right:15px;
	}
`
export const NavSearch = styled.input.attrs({
	placeholder:'搜索'
})`
	width:160px;
	height:38px;
	padding:0 40px 0 20px;
	box-sizing:border-box;
	border:1px solid #eee;;
	outline:none;
	border-radius:40px;
	background:#eee;
	font-size:14px;
	transition:all 0.3s ease-in;
	&::placeholder{
		color:#999;
	}
	&.focused{
		width:230px;
	}
`
export const Addition = styled.div`
	position:absolute;
	right:0;
	top:0;
	height:56px;
`
export const Button = styled.div`
	float:right;
	line-height:38px;
	border-radius:19px;
	margin-top:9px;
	border:1px solid #ec6149;
	padding:0 20px;
	margin-right:15px;
	font-size:14px;
	&.reg{
		color:#ec6149;
	}
	&.writting{
		color:#fff;
		background:#ec6149;
		.iconfont{
			margin-right:5px;
		}
	}
`

export const SearchWrapper = styled.div`
	position:relative;
	float:left;
	margin-top:9px;
	box-sizing:border-box;
	border:1px solid #eee;;
	outline:none;
	border-radius:40px;
	background:#eee;
	font-size:14px;
	margin-left:20px;
	transition:all 0.3s ease-in;
	.iconfont{
	    position: absolute;
	    width:30px;
	    height:30px;
	    top: 3px;
	    right: 10px;
	    line-height:30px;
	    text-align:center;
	    border-radius:15px;
	    &.focused{
	    	background:gray;
	    	color:#fff;
	    }
	}
`

export const SearchInfo = styled.div`{
	position:absolute;
	left:0;
	width:240px;
	top:56px;
	padding:0 20px;
	box-shadow: 0 0 8px rgba(0,0,0,0.2);
	background:#fff;
}`
export const SearchInfoTitle = styled.div`{
	margin-top:20px;
	margin-bottom:15px;
	line-height:20px;
	color:#969696;
}`
export const SearchInfoSwitch = styled.span`{
	font-size:13px;
	float:right;
}`
export const SearchInfoItem = styled.a`{
	display:block;
	float:left;
	font-size:12px;
	padding:0 5px;
	line-height:12px;
	border:1px solid #ddd;
	color:#777;
	border-radius:2px;
	margin-right:10px;
	margin-bottom:15px;
}`