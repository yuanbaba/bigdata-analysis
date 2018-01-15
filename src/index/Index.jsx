import  react,{Component} from 'react';
import  {render} from 'react-dom';
import  Header from '../components/header/Header.jsx';
import  { navs } from 'navConfig';
import  NavItem from '../components/navItem/NavItem.jsx';
import './index.css';

export default class Index extends Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(navs);
        return (
            <div className="main">
                <Header isLogin={false}/>
                <div className="navs">
                    {
                        Object.keys(navs).map((item,index) => (
                            <NavItem navName={navs[item].name}/>
                        ))
                    }
                </div>
            </div>
        )
    }
}
render(<Index/>,document.querySelector('#content'));