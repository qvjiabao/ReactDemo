import React from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style';
import { connect } from 'react-redux';

const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <NavItem className="right">登录</NavItem>
                <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
                <SearchWrapper>
                    <NavSearch
                        className={props.focused ? "focused" : ""}
                        onFocus={props.handlerInputFocus}
                        onBlur={props.handlerInputBlur}
                    />
                    <i className={props.focused ? "focused iconfont" : "iconfont"}
                        dangerouslySetInnerHTML={{ __html: props.focused ? "&#xe617;" : "&#xe63e;" }}>

                    </i>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className="writting"><i className="iconfont">&#xe617;</i>写文章</Button>
                <Button className="reg">注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        focused: state.header.focused
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlerInputFocus() {
            const action = {
                type: 'search_focus'
            }
            dispatch(action);
        },
        handlerInputBlur() {
            const action = {
                type: 'search_blur'
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);