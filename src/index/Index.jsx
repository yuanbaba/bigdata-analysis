import  react,{Component} from 'react';
import  {render} from 'react-dom';
import  Header from '../components/header/Header.jsx';
import './index.css';

export default class Index extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="main">
                <Header isLogin={false}/>
            </div>
        )
    }
}
render(<Index/>,document.querySelector('#content'));