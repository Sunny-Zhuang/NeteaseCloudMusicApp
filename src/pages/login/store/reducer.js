import { fromJS } from 'immutable';
import * as ActionTypes from './actionTypes'

const defaultState = fromJS({
    isLogin: false,
    isNumberLogin:false,
    number: ''
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.CHECK_LOGIN_STATUS:
            return state.set('isLogin', action.isLogin)
        case ActionTypes.SAVE_NUMBER:
            return state.set('number', action.number)
            case ActionTypes.UPDATE_LOGIN_STATUS:
            return state.set('isNumberLogin', true)
        default:
            return state;
    }
}