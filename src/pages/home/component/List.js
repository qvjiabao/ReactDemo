import React, { Component } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { InitList, GetMoreList } from '../store/actionCreator';

class List extends Component {
    render() {
        const { list, getMoreList } = this.props;
        return (<div>
            {
                list.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <img className="pic" src={item.get('imgUrl')} />
                            <ListInfo>
                                <h3 className="title">{item.get('title')}</h3>
                                <p className="desc">{item.get('desc')}</p>
                            </ListInfo>
                        </ListItem>
                    )
                })
            }
            <LoadMore onClick={getMoreList}>更多文字</LoadMore>
        </div>)
    }

    componentDidMount() {
        this.props.InitList();
    }
}

const mapState = (state) => ({ list: state.get('home').get('componentList') })

const mapDispatch = (dispatch) => {
    return {
        InitList: () => (dispatch(InitList())),
        getMoreList: () => (dispatch(GetMoreList()))
    }
}

export default connect(mapState, mapDispatch)(List);