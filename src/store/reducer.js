import { reducer as headerReducer } from '../common/header/sotre';
import { reducer as homeReducer } from '../pages/home/store';
import { combineReducers } from 'redux-immutable';

export default combineReducers({
    header: headerReducer,
    home: homeReducer
})