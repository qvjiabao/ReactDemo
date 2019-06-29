import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    position:relative;
    height:56px;
    border-bottom: 1px solid #F0F0F0
`
export const Logo = styled.a.attrs({
    href:'/'
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
    background:green;
    margin:0 auto;
`