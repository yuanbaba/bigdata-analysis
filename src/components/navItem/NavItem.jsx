import react,{Component} from 'react';
import {render} from 'react-dom';
import './navItem.css';

export default class Navs extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="navItem">
                {this.props.navName}
            </div>
        )
    }
}