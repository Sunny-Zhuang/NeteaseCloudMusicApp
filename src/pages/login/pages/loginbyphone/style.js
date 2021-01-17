import styled from 'styled-components'

export const LoginByPhoneWrapper = styled.div`
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
    .subTitle{
        font-size:2.4vh;
        color: #C0C0C0;
    }
`

export const LoginByPhoneInput = styled.div`
    margin-top:4vh;
    width:100%;
    display:flex;
    align-items:center;
    .region{
        font-size:3.5vh;
        padding:1vh 2vw 1vh 0;
    }
   input{
       width:72vw;
       outline:none;
       font-size: 2.7vh;
       border: 0;
   }
`

export const LoginByPhoneButton = styled.div`
    margin:0 auto;
    height:6vh;
    width:92vw;
    border-radius:6vh;
    margin-top:8vh;
    text-align:center;
    line-height:6vh;
    background:red;
    color:white;
    &.notext{
        opacity:0.5;
    }
`
