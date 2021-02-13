import React,{PureComponent} from 'react'
import {
    UserWrapper,
    UserLogoutInfo,
    UserLogoutImg,
    UserLogoutMessage,
    UserLoginInfoWrapper,
    UserPlayList,
} from './style'
import {connect} from 'react-redux';
import * as LoginActionCreators from '../login/store/actionCreators'
import * as UserActionCreators from './store/actionCreators'
import {Link} from 'react-router-dom'

class User extends PureComponent{
    handleLoginStatus = (isNumberLogin)=>{
        if(true){
            const {playList} = this.props;
            return (
                <div>
                <UserLoginInfoWrapper>
                    <div className="background-img"></div>
                    <div className="user-content"></div>
                    <div className="user-icon"></div>
                    <div className="userinfo-wrapper">
                        <div className="use-name">Sunny</div>
                        <div className="use-detail">Lv 7</div>
                    </div>
                    <UserPlayList>
                        {playList.map((item)=>{
                            return (
                              <div key={item.id} className="play-item-wrapper">
                                <div className="play-item-left">
                                  <img
                                    className="image"
                                    src={item?.coverImgUrl}
                                    alt=""
                                  />
                                </div>
                                <div className="play-item-right">
                                  <div className="upper-font">{item?.name}</div>
                                  <div className="down-font">
                                    {item?.trackCount}首
                                  </div>
                                </div>
                              </div>
                            );
                        })}
                    </UserPlayList>
                </UserLoginInfoWrapper>
                </div>
            )
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
        const {isNumberLogin} = this.props;
        return(
            <UserWrapper>
                {this.handleLoginStatus(isNumberLogin)}
            </UserWrapper>
        )
    }
    componentDidMount(){
        // 先不要纠结登录
        // this.props.checkLoginStatus()
        this.props.getUserDetail()
    }
}

const mapState = (state)=>{
    return{
        isLogin:state.get('login').get('isLogin'),
        isNumberLogin:state.get('login').get('isNumberLogin'),
        playList:state.get('user').get('playlist'),
    }
}

const dispatchProps = (dispatch)=>{
    return{
        checkLoginStatus(){
            dispatch(LoginActionCreators.checkLoginStatus())
            console.error('checkLoginStatus')
        },
        getUserDetail(){
            dispatch(UserActionCreators.getUserDetail())
        }
    }
}

export default connect(mapState,dispatchProps)(User);
