import React,{Component} from 'react'
import axios from 'axios'


class search extends Component {
    constructor(props){
     super(props)
this.state = {
    newStyle:''
}
}
    inputStyle(){
        let index = this.uStyleArray.map((ele)=>{
            return ele.id
        })

    }


    






render(){
    // console.log(this.state)
    return(

        <div>
        
     <input onChange={(e)=>this.inputStyle(e.target.value)}/>  
     <button onClick={this.props.getStyle}>test</button> 
       <button>test</button>
        </div>
        
    )
} 
}


export default search


