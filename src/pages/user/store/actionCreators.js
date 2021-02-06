import axios from 'axios'
import * as ActionTypes from './actionTypes'
import {fromJS} from 'immutable'

export const getUserDetail = ()=>{
    return (dispatch)=>{
        axios.post('http://localhost:4000/user/playlist?uid=32953014',{ withCredentials: true }).then((res)=>{
            console.error('res',res.data.playlist)
            if(res?.data?.playlist){
                const action = {
                    type:ActionTypes.GET_USER_DETAIL,
                    data:res.data.playlist
                }
                dispatch(action)
            }
        })
        
    }
}


