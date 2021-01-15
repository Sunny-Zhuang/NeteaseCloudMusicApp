import {fromJS} from 'immutable';
import * as ActionTypes from './actionTypes'

const defaultState = fromJS({
    isLogin:false,
})

export default (state=defaultState,action)=>{
    switch(action.type){
        case ActionTypes.CHECK_LOGIN_STATUS:
            console.error('reducer',action.isLogin)
            return state.set('isLogin',action.isLogin)
        default:
            return state;
    }
}