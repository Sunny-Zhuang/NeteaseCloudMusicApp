import { fromJS } from 'immutable';
import * as ActionTypes from './actionTypes'

const defaultState = fromJS({
    playlist:[]
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.GET_USER_DETAIL:
            console.error(666,action.data)
            return state.set('playlist',action.data)
        default:
            return state;
    }
}