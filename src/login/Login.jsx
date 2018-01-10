import react,{Component} from 'react';
import {render} from 'react-dom';

export default class Login extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="login-main">
                <div className="login-bg"></div>
                <div className="login-div"></div>
            </div>
        )
    }
}