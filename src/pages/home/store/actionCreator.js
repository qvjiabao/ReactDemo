import axios from 'axios';
import { fromJS } from 'immutable';
import { INIT_TOPICLIST } from './actionTypes';

export const InitList = () => {
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