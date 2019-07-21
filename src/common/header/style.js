import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    position:relative;
    height:56px;
    border-bottom: 1px solid #F0F0F0
`
export const Logo = styled.a.attrs({
    href: '/'
})`
    position:absolute;
    top:0;
    left:0;
    display:block;
    height:56px
    width:100px;
    background:url(${logoPic});
    background-size:contain;
`
export const Nav = styled.div`
    width:960px;
    height:100%;
    margin:0 auto;
    padding-right:70px;
    box-sizing:border-box;
`
export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
    }
    &.right{
        float:right;
        color:#969696
    }
    &.active{
        color:#ea6f5a;
    }
`
export const NavSearch = styled.input.attrs({
    placeholder: "搜索"
})`
    width:160px;
    height:38px;
    padding:0 30px 0 20px;
    margin-top:9px;
    margin-left:20px;
    box-sizing:border-box;
    border:none;
    outline:none;
    color:#666;
    border-radius:19px;
    background-color:#eee;
    font-size:14px;
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:240px;
    }
`

export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`

export const Button = styled.div`
    text-align:center;
    float:right;
    margin-top:9px;
    margin-right:20px;
    padding: 0 20px;
    line-height:38px;
    border-radius:19px;
    border:1px solid #ec6149;
    font-size:14px;
    &.reg{
        color:#ec6149;
    }
    &.writting{
        color:#fff;
        background:#ec6149;
    }
`

export const SearchWrapper = styled.div`
    position:relative;
    float:left;
    .iconfont{
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        height:30px;
        border-radius:15px;
        line-height:30px;
        text-align:center;
        &.focused{
            background-color:RGB(150,150,150)
        }
    }
`

export const SearchInfo = styled.div`
    position:absolute;
    left:20px;
    top:56px;
    width:240px;
    padding:0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
`

export const SearchInfoTitle = styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`

export const SearchInfoSwitch = styled.span`
    float:right;
    font-size:12px;
`
export const SearchInfoItem = styled.a`
    line-height:20px;
    padding:0 5px;
    font-size:12px;
    border:1px solid #ddd;
    color:#787878;
    border-radius:3px;
    display:block;
    float:left;
    margin-right:10px;
    margin-bottom:15px;
`