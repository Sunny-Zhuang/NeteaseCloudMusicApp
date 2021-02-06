import React, { PureComponent } from 'react'
import {
    LoginByCaptchaWrapper,
    LoginByCaptchaInput,
} from './style'
import { connect } from 'react-redux'
import axios from 'axios'
import * as ActionCreators from '../../store/actionCreators'

class LoginByCaptcha extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            timeCount: 60,
            inputList: [
                { isfocus: true },
                { isfocus: false },
                { isfocus: false },
                { isfocus: false }
            ],
            inputCaptcha: ''
        }
        this.handleResend = this.handleResend.bind(this)
    }

    render() {
        const { inputNumber } = this.props
        return (
            <LoginByCaptchaWrapper>
                <div className='title'>请输入验证码</div>
                <div className="subWrapper">
                    <div className='subTitle'>已发送至+86 {inputNumber}</div>
                    {this.checkCount(this.state.timeCount)}
                </div>
                <LoginByCaptchaInput>
                    {this.state.inputList.map((item, index) => {
                        return (<input type='number' key={index} autoFocus={item.isfocus} readOnly={!item.isfocus} className={item.isfocus ? 'focused' : ''} onChange={this.handlechange.bind(this, index)}></input>)
                    })}
                </LoginByCaptchaInput>

            </LoginByCaptchaWrapper>
        )
    }

    checkCount = (count) => {
        if (count === 0) {
            return (<div className='timeResend' onClick={this.handleResend}>重新发送</div>)
        } else {
            return (<div className='timeCheck'>{count}S</div>)
        }
    }

    handleResend() {
        const inputNumber = this.props.inputNumber
        axios.get('http://localhost:4000/captcha/sent?phone=' + inputNumber, { withCredentials: true }).then((res) => {
            if (res?.data?.data === true) {
                this.setState({
                    timeCount: 60
                })
                this.updateCount()
            }
        })
    }

    updateCount() {
        this.internal = setInterval(() => {
            if (this.state.timeCount === 0) {
                clearInterval(this.internal)
            } else {
                this.setState({
                    timeCount: this.state.timeCount - 1
                })
            }
        }, 1000)
    }

    handlechange(index, e) {

        const updatedInputList = JSON.parse(JSON.stringify(this.state.inputList))
        var inputList = document.getElementsByTagName('input')
        var inputValue = e.target.value;
        if(index===2&&inputValue?.length===2){
            var inputCaptcha =''
            for(let i =0;i<inputList.length;i++){
                inputCaptcha+=inputList[i].value;
                if((index+1)==i){
                    inputList[index].value = inputValue[0];
                    inputList[i].value = inputValue[1];
                    updatedInputList[i].isfocus = true;
                }else{
                    updatedInputList[i].isfocus = false;
                }
            }
            console.error('call api',inputCaptcha)
            this.verifyCaptcha(inputCaptcha)
        }else{
            if(inputValue?.length===2){
                for(let i =0;i<inputList.length;i++){
                    if((index+1)==i){
                        inputList[index].value = inputValue[0];
                        inputList[i].value = inputValue[1];
                        updatedInputList[i].isfocus = true;
                        inputList[i].focus()
                    }else{
                        updatedInputList[i].isfocus = false;
                    }
                }
            }
            if(inputValue===''){
                if(index===0){
                    console.error('at beginning')
                }else{
                    for(let i =0;i<inputList.length;i++){
                        if((index-1)===i){
                            updatedInputList[i].isfocus = true;
                            inputList[i].focus()
                        }else{
                            updatedInputList[i].isfocus = false;
                        }
                    }
                }
            }
           
        }
       
        this.setState({
            inputList: updatedInputList,
        })
    }

    verifyCaptcha(inputCaptcha){
        const inputNumber = this.props.inputNumber
        axios.get('http://localhost:4000/captcha/verify?phone='+inputNumber+'&captcha='+inputCaptcha,{withCredentials: true }).then((res)=>{
            if(res?.data?.data===true){
                this.props.updateLoginStatus()
                this.props.history.push('/')
            }
        }).catch((error)=>{
            this.setState({
                inputList: [
                    { isfocus: true },
                    { isfocus: false },
                    { isfocus: false },
                    { isfocus: false }
                ]
            })
            var inputList = document.getElementsByTagName('input')
            inputList[0].focus()
            for(let i =0;i<inputList.length;i++){
                inputList[i].value = ''
            }
        })
    }

    componentDidMount() {
        this.updateCount()
    }

    componentWillUnmount() {
        if (this.internal) {
            clearInterval(this.internal)
        }
    }

}

const mapProps=(dispatch)=>{
    return{
        updateLoginStatus(){
            dispatch(ActionCreators.updateLoginStatus())
        }
    } 
}

const mapState = (state) => {
    return {
        inputNumber: state.get('login').get('number')
    }
}


export default connect(mapState, mapProps)(LoginByCaptcha);
