import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'
import {
    LoginBody,
    LoginButtonPhone,
    LoginButtonExperience,
} from './style'

class Login extends PureComponent {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        return (
            <LoginBody>
                    <LoginButtonPhone onClick={this.handleClick}>手机号登录</LoginButtonPhone>
                    <LoginButtonExperience>立即体验</LoginButtonExperience>
            </LoginBody>
        )
    }
    handleClick(){
        this.props.history.push("/loginbyphone");
    }

}

export default Login;