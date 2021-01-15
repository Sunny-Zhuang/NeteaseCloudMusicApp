import axios from 'axios'
import * as ActionTypes from './actionTypes'
import axio from 'axios'
import {fromJS} from 'immutable'

export const checkLoginStatus = ()=>{
    return (dispatch)=>{
        const isLogin = false;
        axios.post('http://localhost:4000/login/status',{ withCredentials: true }).then((res)=>{
            console.error('res',res)
            if(res?.data?.account){
                isLogin=true;
            }
        })
        const action = {
            type:ActionTypes.CHECK_LOGIN_STATUS,
            isLogin:fromJS(isLogin)
        }
        dispatch(action)
    }
}