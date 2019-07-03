import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            focused: false
        }
        this.handlerInputFocus = this.handlerInputFocus.bind(this);
        this.handlerInputBlur = this.handlerInputBlur.bind(this);
    }

    render() {
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
                            className={this.state.focused ? "focused" : ""}
                            onFocus={this.handlerInputFocus}
                            onBlur={this.handlerInputBlur}
                        />
                        <i className={this.state.focused ? "focused iconfont" : "iconfont"}
                            dangerouslySetInnerHTML={{ __html: this.state.focused ? "&#xe617;" : "&#xe63e;" }}>

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

    handlerInputFocus() {
        this.setState({
            focused: true
        });
    }

    handlerInputBlur() {
        this.setState({
            focused: false
        });
    }
}

export default Header;