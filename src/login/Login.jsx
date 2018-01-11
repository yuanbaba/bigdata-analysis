import react,{Component} from 'react';
import {render} from 'react-dom';
import './login.css';

export default class Login extends Component{
    constructor(props){
        super(props);
    }
    /**
       用户登录
    */
    login = () =>{

    }
    render(){
        return(
            <div className="login-main">
                <div className="header">
                    <a href=""><span>首页</span></a>
                </div>
                {/*<div className="login-bg"></div>*/}
                <div className="login-div">
                    <div className="login-title">
                        登录
                    </div>
                    <div className="login-body">
                        <input className="login-input" type="text" placeholder='用户名'/>
                        <input className="login-input" type="password" placeholder='密码'/>
                        <div className="login-btn login-input" onClick={this.login}>登录</div>
                    </div>
                </div>
            </div>
        )
    }
}
render(<Login/>,document.querySelector('#content'));