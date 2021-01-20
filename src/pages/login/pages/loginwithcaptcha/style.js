import styled from 'styled-components'

export const LoginByCaptchaWrapper = styled.div`
    top:7vh;
    width:100%;
    bottom:0;
    position:absolute;
    display:flex;
    flex-direction:column;
    background:white;
    box-sizing:border-box;
    padding: 4vw 2vh;
    .title{
        font-size:3vh;
        margin-bottom:1.5vh;
    }
    .subWrapper{
        display:flex;
        justify-content:space-between;
        align-items:flex-end;
    }
    .subWrapper .subTitle{
        font-size:2.4vh;
        color: #C0C0C0;
    }
    .subWrapper .timeCheck{
        font-size:2.7vh;
        color: #C0C0C0;
    }
    .subWrapper .timeResend{
        font-size:2.4vh;
    }
`

export const LoginByCaptchaInput = styled.div`
    margin-top:4vh;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-around;
    input{
        width:20vw;
        outline:none;
        font-size: 3vh;
        border: 0;
        text-align:center;
        border-bottom:1px solid #dcdcdc;
        // caret-color: transparent;
    }
    input.focused{
        border-bottom:1px solid #000;
    }
`

