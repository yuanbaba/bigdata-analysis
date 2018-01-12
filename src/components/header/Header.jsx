import react,{Component} from 'react';
import {render} from 'react-dom';
import './header.css';

export default class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="header" style={this.props.isLogin?{height:'50px',lineHeight:'50px'}:{height:'40px',lineHeight:'40px'}}>
                <a href="./index.html"><span style={this.props.isLogin?{lineHeight:'50px'}:{lineHeight:'40px'}}>首页</span></a>
            </div>
        )
    }
}