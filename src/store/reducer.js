import {combineReducers} from 'redux-immutable'
import loginReducer from '../pages/login/store/reducer'
import userReducer from '../pages/user/store/reducer'


export default combineReducers({
    login:loginReducer,
    user:userReducer
})