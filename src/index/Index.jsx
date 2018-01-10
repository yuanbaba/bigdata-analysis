import  react,{Component} from 'react';
import {render} from 'react-dom';
import './index.css';

export default class Index extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="main"></div>
        )
    }
}
render(<Index/>,document.querySelector('#content'));