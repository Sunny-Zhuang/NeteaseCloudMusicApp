import styled from 'styled-components'

export const FooterWrapper = styled.div`
    position:absolute;
    width:100%;
    height:10vh;
    bottom:0;
    display:flex;
    justify-content: space-between;
    align-items:flex-start;
    padding:2vh 2vw 0 2vw;
    box-sizing:border-box;
`

export const FooterItem = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color: #999; 
    .iconFocus{
        background-color:red;
        border-radius:50px;
    }
`

export const FooterFont = styled.div`
    font-size:1.5vh;
    margin-top:0.5vh;
    &.redFont{
        color:red;
    }
`
