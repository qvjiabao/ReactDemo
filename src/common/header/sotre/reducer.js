import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    list: [],
    page: 1,
    totalPage: 1,
    mousein: false
});

export default (state = defaultState, action) => {
    if (action.type === actionTypes.SEARCH_FOCUS) {
        return state.set('focused', true);
    }
    if (action.type === actionTypes.SEARCH_BLUR) {
        return state.set('focused', false);
    }
    if (action.type === actionTypes.CHANGE_LIST) {
        return state.merge({
            list: action.data,
            totalPage: action.totalPage
        });
    }
    if (action.type === actionTypes.CHANGE_MOUSEENTER) {
        return state.set('mousein', true);
    }
    if (action.type === actionTypes.CHANGE_MOUSELEAVE) {
        return state.set('mousein', false);
    }
    if (action.type === actionTypes.CHANGE_PAGE) {
        return state.set('page', action.page);
    }
    return state;
}