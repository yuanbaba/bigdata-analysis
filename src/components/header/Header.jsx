import react,{Component} from 'react';
import {render} from 'react-dom';
import './header.css';

export default class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            this.props.isLogin ?
                <div className="header login-header">
                    <a href="./index.html"><span>首页</span></a>
                </div>
                :<div className="header login-header">
                    <a href="./login"><span>登录</span></a>
                </div>
        )
    }
}