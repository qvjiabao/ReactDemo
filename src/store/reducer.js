import { reducer as headerReducer} from '../common/header/sotre';
import { combineReducers } from 'redux';

export default combineReducers({
    header: headerReducer
})