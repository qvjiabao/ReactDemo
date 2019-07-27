import * as actionTypes from './actionTypes'
import axios from 'axios';
import { fromJS } from 'immutable';

export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
});

const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch(() => {
            console.log('error');
        });
    }
};

export const changeMouseEnter = () => ({
    type: actionTypes.CHANGE_MOUSEENTER
});
export const changeMouseLeave = () => ({
    type: actionTypes.CHANGE_MOUSELEAVE
});
export const changePage = (page) => ({
    type: actionTypes.CHANGE_PAGE,
    page
});