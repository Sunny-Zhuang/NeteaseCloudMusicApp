import styled from 'styled-components'
import backgroundImg from '../../static/NeteaseCloud.jpg'

export const LoginBody=styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:url(${backgroundImg});
    background-size:cover;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-position: center 0;
`

export const LoginButtonPhone = styled.div`
    height:6vh;
    width:80vw;
    background:white;
    border-radius:6vh;
    position:absolute;
    top:60vh;
    color:red;
    font-size:2.7vh;
    line-height:6vh;
    text-align:center;
    font-weight:bold;
`

var fn = myModule()
fn.doOtherthing() //dfanjds

export const LoginButtonExperience = styled.div`
    height:6vh;
    width:80vw;
    border-radius:7vh;
    position:absolute;
    top:68vh;
    color:white;
    border:2px solid white;
    line-height:6vh;
    text-align:center;
    font-weight:bold;
    font-size:2.7vh;
`
