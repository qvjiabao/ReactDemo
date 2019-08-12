import axios from 'axios';
import { fromJS } from 'immutable';
import { INIT_TOPICLIST, INIT_COMPONNETLIST, INIT_COMPONNETLISTMORE } from './actionTypes';

export const InitTopicList = () => {
    return (dispatch) => {
        axios.get('/api/topicList.json').then((res) => {
            return dispatch({
                type: INIT_TOPICLIST,
                data: fromJS(res.data)
            })
        }).catch(() => {
            console.log('error');
        });
    }
}

export const InitList = () => {
    return (dispatch) => {
        axios.get('/api/componentList.json').then((res) => {
            return dispatch({
                type: INIT_COMPONNETLIST,
                data: fromJS(res.data)
            })
        }).catch(() => {
            console.log('error');
        });
    }
}

export const GetMoreList = () => {
    return (dispatch) => {
        axios.get('/api/componentListMore.json').then((res) => {
            return dispatch({
                type: INIT_COMPONNETLISTMORE,
                data: fromJS(res.data)
            })
        }).catch(() => {
            console.log('error');
        });
    }
}
