import react,{Component} from 'react';
import {render} from 'react-dom';
import Header from '../components/header/Header.jsx';
import {login} from '../../common/js/indexAPI.js';
import './login.css';

export default class Login extends Component{
    constructor(props){
        super(props);
    }
    /**
       用户登录
    */
    login = () =>{
        const username = document.getElementById('username').value;
        const pwd = document.getElementById('pwd').value;
        if(username == ''|| username == null){
            alert('用户名不能为空');
            return false;
        }
        if(pwd == '' || pwd == null){
            alert('密码不能为空');
            return false;
        }
        let param = {
            username:username,
            pwd:pwd
        }
        login(param).then(result=>{
            console.log(result);
        }).catch(e=>{
            console.log();
        })
    }
    render(){
        return(
            <div className="login-main">
                <Header isLogin={true}/>
                {/*<div className="login-bg"></div>*/}
                <div className="login-div">
                    <div className="login-title">
                        登录
                    </div>
                    <div className="login-body">
                        <input id="username" className="login-input" type="text" placeholder='用户名'/>
                        <input id="pwd" className="login-input" type="password" placeholder='密码'/>
                        <div className="login-btn login-input" onClick={this.login}>登录</div>
                    </div>
                </div>
            </div>
        )
    }
}
render(<Login/>,document.querySelector('#content'));