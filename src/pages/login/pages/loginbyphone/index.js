import React, { PureComponent } from 'react'
import {
    LoginByPhoneWrapper,
    LoginByPhoneInput,
    LoginByPhoneButton
} from './style'
import axios from 'axios'

class LoginByPhone extends PureComponent {
    constructor(props) {
        super(props)
        this.handleInput = this.handleInput.bind(this)
        this.handleClickButton = this.handleClickButton.bind(this)
        this.state = {
            number: ''
        }
    }

    render() {
        return (
           
            <LoginByPhoneWrapper>
                <div className='title'>登录后体验更多精彩</div>
                <div className='subTitle'>未注册手机号登录后会自动创建账号</div>
                <LoginByPhoneInput>
                    <div className='region'>+86</div>
                    <div className='content'>
                        <input type='number' placeholder='输入手机号' onChange={this.handleInput}></input>
                    </div>
                </LoginByPhoneInput>
                <LoginByPhoneButton className={this.state.number ? '' : 'notext'} onClick={this.handleClickButton}>下一步</LoginByPhoneButton>
            </LoginByPhoneWrapper>
        )
    }
    handleInput(e) {
        const value = e.target.value;
        this.setState(() => {
            return { number: value }
        })
    }
    handleClickButton(){
        const numberReg=/^1[3-9][0-9]{9}$/
        if(!numberReg.test(this.state.number)){
            console.error('input error')
        }else{
            axios.get('http://localhost:4000/captcha/sent?phone='+this.state.number,{withCredentials: true }).then((res)=>{
                console.error('res',res)
                if(res?.data?.data===true){
                    this.props.history.push('/')
                }
            })
        }
    }
    
}


export default LoginByPhone;
