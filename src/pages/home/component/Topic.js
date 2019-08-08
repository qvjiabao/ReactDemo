import React, { Component } from 'react';
import { TopicWrapper, TopicItem } from '../style';
import { connect } from 'react-redux';
import { InitTopicList } from '../store/actionCreator';

class Topic extends Component {
    render() {
        const { list } = this.props;
        return (
            <TopicWrapper>
                {
                    list.map((item) => (
                        <TopicItem key={item.get('id')}>
                            <img className="topic-pic" src={item.get('imgUrl')} />
                            {item.get('title')}
                        </TopicItem>
                    ))
                }
            </TopicWrapper>
        )
    }

    componentDidMount() {
        this.props.InitList();
    }
}

const mapState = (state) => ({ list: state.get('home').get('topicList') })

const mapDispatch = (dispatch) => {
    return {
        InitList: () => {
            dispatch(InitTopicList());
        }
    }
}

export default connect(mapState, mapDispatch)(Topic);