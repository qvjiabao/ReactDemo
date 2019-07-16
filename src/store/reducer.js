import { reducer as headerReducer} from '../common/header/sotre';
import { combineReducers } from 'redux-immutable';

export default combineReducers({
    header: headerReducer
})