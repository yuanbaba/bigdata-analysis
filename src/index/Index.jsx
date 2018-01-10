import  react,{component} from 'react'
import  {render} from 'react-dom'

export default class Index extends Comment{
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