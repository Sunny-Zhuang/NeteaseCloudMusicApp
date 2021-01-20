import React, { PureComponent } from 'react'
import {
    LoginByPhoneWrapper,
    LoginByPhoneInput,
    LoginByPhoneButton
} from './style'
import {connect} from 'react-redux'
import axios from 'axios'
import * as ActionCreators from '../../store/actionCreators'

class LoginByPhone extends PureComponent {
    constructor(props) {
        super(props)
        this.handleInput = this.handleInput.bind(this)
        this.handleClickButton = this.handleClickButton.bind(this)
    }

    render() {
        const {inputNumber} = this.props
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
                <LoginByPhoneButton className={inputNumber ? '' : 'notext'} onClick={this.handleClickButton}>下一步</LoginByPhoneButton>
            </LoginByPhoneWrapper>
        )
    }
    handleInput(e) {
        const value = e.target.value;
        this.props.saveNumber(value);
        // this.setState(() => {
        //     return { number: value }
        // })
    }
    handleClickButton(){
        const numberReg=/^1[3-9][0-9]{9}$/
        const inputNumber =this.props.inputNumber
        if(!numberReg.test(inputNumber)){
            console.error('input error')
        }else{
            axios.get('http://localhost:4000/captcha/sent?phone='+inputNumber,{withCredentials: true }).then((res)=>{
                if(res?.data?.data===true){
                    this.props.saveNumber(inputNumber);
                    this.props.history.push('/loginbycaptcha')
                }
            })
        }
    }
    
}

const mapState = (state) =>{
    return {
        inputNumber:state.get('login').get('number')
    }
}

const mapProps = (dispatch)=>{
    return {
        saveNumber(number){
            dispatch(ActionCreators.saveNumber(number))
        }

    }
}


export default connect(mapState,mapProps)(LoginByPhone);
