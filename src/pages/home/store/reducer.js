
import { INIT_TOPICLIST } from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: []
});

export default (state = defaultState, action) => {
    if (action.type === INIT_TOPICLIST) {
        return state.set('topicList', action.data);
    }
    return state;
}