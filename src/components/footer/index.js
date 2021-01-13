import React, { Component } from 'react';
import {
    FooterWrapper,
    FooterItem,
    FooterFont
} from './style'
import { Link } from 'react-router-dom'

class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {
            tabList:[
                {id:'iconFound',active:true,title:'发现',iconId:'&#xe68c;',link:'/'},
                {id:'iconPlay',active:false,title:'播客',iconId:'&#xe61e;',link:'/'},
                {id:'iconMe',active:false,title:'我的',iconId:'&#xe78a;',link:'/user'},
                {id:'iconSing',active:false,title:'K歌',iconId:'&#xe613;',link:'/music'},
                {id:'iconCloud',active:false,title:'云村',iconId:'&#xe61a;',link:'/'}
            ]
        }
    }
    render() {
        return (
            <FooterWrapper id='footerLink'>
                {this.state.tabList.map((item,index)=>{
                    return(
                        <Link style={{ textDecoration: 'none' }} to={item.link}>
                        <FooterItem onClick={this.handleClick.bind(this,index)}>
                            <span className={item.active? 'iconfont iconFocus' : 'iconfont'} dangerouslySetInnerHTML={{__html: item.iconId}}></span>
                            <FooterFont className={item.active? 'redFont' : ''}>{item.title}</FooterFont>
                        </FooterItem>
                    </Link>
                    )
                })}
            </FooterWrapper>
        )
    }
   
    handleClick(index){
        console.error(111,index)
        const updatedTabList = this.state.tabList;
        this.state.tabList.forEach((item,id) => {
            if(index===id){
                updatedTabList[id].active=true;
            }else{
                updatedTabList[id].active=false;
            }
        });
        this.setState(()=>{
            return{
                tabList:updatedTabList
            }
        })
    }

    componentDidMount() {
        document.getElementById('footerLink').addEventListener('click', this.handleLink)
    }
    componentWillUnmount() {
        document.getElementById('footerLink').removeEventListener('click', this.handleLink)
    }
}

export default Footer;