
import { INIT_TOPICLIST, INIT_COMPONNETLIST } from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [],
    componentList: []
});

export default (state = defaultState, action) => {
    if (action.type === INIT_TOPICLIST) {
        return state.set('topicList', action.data);
    }
    if (action.type === INIT_COMPONNETLIST) {
        return state.set('componentList', action.data);
    }
    return state;
}