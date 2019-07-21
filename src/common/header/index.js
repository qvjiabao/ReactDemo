import React, { Component } from 'react';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem
} from './style';
import { connect } from 'react-redux';
import { actionCreator } from './sotre'

class Header extends Component {

    getListArea = () => {
        if (this.props.focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                    <SearchInfoSwitch>
                        换一批
                    </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        {
                            this.props.list.map((item) => {
                                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            })
                        }
                    </div>
                </SearchInfo>
            );
        }
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
                            className={this.props.focused ? "focused" : ""}
                            onFocus={this.props.handlerInputFocus}
                            onBlur={this.props.handlerInputBlur}
                        />
                        <i className={this.props.focused ? "focused iconfont" : "iconfont"}
                            dangerouslySetInnerHTML={{ __html: this.props.focused ? "&#xe617;" : "&#xe63e;" }}>
                        </i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writting"><i className="iconfont">&#xe617;</i>写文章</Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlerInputFocus() {
            dispatch(actionCreator.getList());
            dispatch(actionCreator.searchFocus());
        },
        handlerInputBlur() {
            dispatch(actionCreator.searchBlur());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);