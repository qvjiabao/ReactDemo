import React, { Component } from 'react';
import { RecommendWrapper, RecommendItem } from '../style';

class Recommend extends Component {
    render() {
        return (
            <RecommendWrapper>
                <RecommendItem imgUrl={require('../../../statics/recommend1.png')} />
                <RecommendItem imgUrl={require('../../../statics/recommend1.png')} />
            </RecommendWrapper>
        )
    }
}

export default Recommend;