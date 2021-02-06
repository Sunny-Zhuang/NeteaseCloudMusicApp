import styled from 'styled-components'
import backgroundImg from '../../static/mingren.jpg'
import userImg from '../../static/xiaowanzi.jpeg'

export const UserLoginInfoWrapper = styled.div`
    position:absolute;
    top:0;
    bottom:0;
    width:100%;
    overflow:auto;
    .background-img{
        width:100%;
        height:30vh;
        background:red;
        background:url(${backgroundImg});
        background-size:cover;
    }
    .user-content{
        width:90%;
        left:0;
        right:0;
        margin:0 auto;
        height:16vh;
        position:absolute;
        top:28vh;
        box-shadow:0 0 5px rgba(0,0,0.3);
        border-radius:10px;
    }
    .user-icon{
        width:10vh;
        height:10vh;
        position:absolute;
        top:23vh;
        left:0;
        right:0;
        margin:0 auto;
        border-radius:50%;
        background:url(${userImg});
        background-size:cover;
        background-position: center;
    }
    .userinfo-wrapper{
        display:flex;
        flex-direction:column;
        align-items:center;
        font-size:1.7vh;
        margin-top:3.5vh;
    }
    .use-name{
        font-size:2.7vh;
        margin-bottom:2vh;
    }
    .use-detail{
        color:grey;
        margin-bottom:8vh;
    }
`

export const UserPlayList = styled.div`
    width:90%;
    left:0;
    right:0;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    box-shadow:0 0 5px rgba(0,0,0.3);
    border-radius:10px;
    margin-bottom:2vh;
    padding:2vh 4vw;
    box-sizing:border-box;
    .play-item-wrapper{
        display:flex;
        margin-bottom:1.5vh;
    }
    .play-item-left{
        .image{
            width: 20vw;
            height: 20vw;
            border-radius:10px;
        }
    }
    .play-item-right{
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        padding:0 4vw;
        .upper-font{
            font-size:2.1vh;
        }
        .down-font{
            color:grey;
            font-size:1.8vh;  
        }
    }

`

export const UserWrapper=styled.div`
    top:7vh;
    width:100%;
    bottom:10vh;
    position:absolute;
    background-color: #f9f9f9;
    display:flex;
    flex-direction:column;
`

export const UserLogoutInfo = styled.div`
    display:flex;
    align-items:center;
    padding:4vw 2vh;
`

export const UserLogoutImg = styled.div`
    width:7vh;
    height:7vh;
    border-radius:50%;
    background:white;
    margin:2vh;
`

export const UserLogoutMessage = styled.div`
    font-size:2.7vh;
`