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
        const { focused, list, page, totalPage, mousein, handlerMouseEnter, handlerMouseLeave, handlerchangePage } = this.props;
        const newList = list.toJS();
        const pageList = [];
        if (newList.length) {
            for (let i = ((page - 1) * 10); i < page * 10; i++) {
                if (newList[i])
                    pageList.push(
                        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                    );
            }
        }
        if (focused || mousein) {
            return (
                <SearchInfo
                    onMouseEnter={handlerMouseEnter}
                    onMouseLeave={handlerMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                    <SearchInfoSwitch onClick={() => handlerchangePage(page, totalPage)}>
                            <i className="iconfont spin">&#xe851;</i>换一批
                    </SearchInfoSwitch>
                    </SearchInfoTitle>
                    {pageList}
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
                            onFocus={() => this.props.handlerInputFocus(this.props.list)}
                            onBlur={this.props.handlerInputBlur}
                        />
                        <i className={this.props.focused ? "focused iconfont zoom" : "iconfont zoom"}
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
        list: state.getIn(['header', 'list']),
        totalPage: state.getIn(['header', 'totalPage']),
        page: state.getIn(['header', 'page']),
        mousein: state.getIn(['header', 'mousein']),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlerInputFocus(list) {
            if (list.size === 0)
                dispatch(actionCreator.getList());
            dispatch(actionCreator.searchFocus());
        },
        handlerInputBlur() {
            dispatch(actionCreator.searchBlur());
        },
        handlerMouseEnter() {
            dispatch(actionCreator.changeMouseEnter());
        },
        handlerMouseLeave() {
            dispatch(actionCreator.changeMouseLeave());
        },
        handlerchangePage(page, totalPage) {
            console.log(page, totalPage);
            if (page < totalPage) {
                dispatch(actionCreator.changePage(page + 1));
            } else {
                dispatch(actionCreator.changePage(1));
            }
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);