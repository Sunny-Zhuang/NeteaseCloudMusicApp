import axios from 'axios'
import * as ActionTypes from './actionTypes'
import {fromJS} from 'immutable'

export const checkLoginStatus = ()=>{
    return (dispatch)=>{
        axios.post('http://localhost:4000/login/status',{ withCredentials: true }).then((res)=>{
            console.error('res',res)
            if(res?.data?.account){
                const action = {
                    type:ActionTypes.CHECK_LOGIN_STATUS,
                    isLogin:fromJS(true)
                }
                dispatch(action)
            }
        })
        
    }
}

export const saveNumber = (number)=>{
    return (dispatch)=>{
        const action = {
            type:ActionTypes.SAVE_NUMBER,
            number
        }
        dispatch(action)
    }
}

export const updateLoginStatus = ()=>{
    return (dispatch)=>{
        const action = {
            type:ActionTypes.UPDATE_LOGIN_STATUS,
        }
        dispatch(action)
    }
}

