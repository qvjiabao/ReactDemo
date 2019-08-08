import React, { Component } from 'react';
import { ListItem, ListInfo } from '../style';
import { connect } from 'react-redux';
import { InitList } from '../store/actionCreator';

class List extends Component {
    render() {
        const { list } = this.props;
        return list.map((item) => {
            return (
                <ListItem key={item.get('id')}>
                    <img className="pic" src={item.get('imgUrl')} />
                    <ListInfo>
                        <h3 className="title">{item.get('title')}</h3>
                        <p className="desc">{item.get('desc')}</p>
                    </ListInfo>
                </ListItem>
            )
        })
    }

    componentDidMount() {
        this.props.InitList();
    }
}

const mapState = (state) => ({ list: state.get('home').get('componentList') })

const mapDispatch = (dispatch) => {
    return {
        InitList: () => (dispatch(InitList()))
    }
}

export default connect(mapState, mapDispatch)(List);