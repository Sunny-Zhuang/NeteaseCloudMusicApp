import React,{PureComponent} from 'react'
import {
    UserWrapper,
    UserLogoutInfo,
    UserLogoutImg,
    UserLogoutMessage
} from './style'
import {connect} from 'react-redux';
import * as ActionCreators from '../login/store/actionCreators'
import {Link} from 'react-router-dom'

class User extends PureComponent{
    handleLoginStatus = (isLogin)=>{
        if(isLogin){
            return null;
        }else{
            return(
                <UserLogoutInfo>
                    <UserLogoutImg />
                    <Link to='/login' style={{ textDecoration: 'none' }}>
                        <UserLogoutMessage>立即登录&nbsp;&gt; </UserLogoutMessage>
                    </Link>
                </UserLogoutInfo>
            )
        }
    }
    render(){
        const {isLogin} = this.props;
        return(
            <UserWrapper>
                {this.handleLoginStatus(isLogin)}
            </UserWrapper>
        )
    }
    componentDidMount(){
        this.props.checkLoginStatus()
    }
}

const mapState = (state)=>{
    return{
        isLogin:state.get('login').get('isLogin')
    }
}

const dispatchProps = (dispatch)=>{
    return{
        checkLoginStatus(){
            dispatch(ActionCreators.checkLoginStatus())
            console.error('checkLoginStatus')
        }
    }
}

export default connect(mapState,dispatchProps)(User);
