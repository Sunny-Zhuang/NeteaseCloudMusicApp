import {combineReducers} from 'redux-immutable'
import loginReducer from '../pages/login/store/reducer'

export default combineReducers({
    login:loginReducer
})