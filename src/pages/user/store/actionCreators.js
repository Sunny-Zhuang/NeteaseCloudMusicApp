import * as ActionTypes from './actionTypes'
import service from "../service";
export const getUserDetail = () => {
    return async (dispatch) => {
        try {
            const playlist = await service.getPlayList({})
            // console.log('++ getPlayList', playlist)
            const action = {
                type: ActionTypes.GET_USER_DETAIL,
                data: playlist
            }
            dispatch(action)
        } catch (error) {
            console.log('== getPlayList', error)
        }
    }
}


