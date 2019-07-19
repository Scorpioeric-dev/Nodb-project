import React,{Component} from 'react'
import axios from 'axios'



class header extends Component {
    constructor(props){
        super(props)
            this.state = {
                newStyle:'',
                userInput:''
            
            }
        
        
        
       
    }

        handleChange(e){
            this.setState({
                userInput:e
            })
        }

    
    render() { 
    
   return(
        
    
        <div className='Barberpoles'>
    <img src='https://image.shutterstock.com/image-vector/barber-pole-isolated-on-white-260nw-668798497.jpg'alt=''/>
    <input onChange={(e)=>this.handleChange(e.target.value)}/>  
    <h1>Tu Estilo</h1>
    <button onClick={()=>this.props.getStyle(this.state.userInput)}>search</button>
    <img src='https://image.shutterstock.com/image-vector/barber-pole-isolated-on-white-260nw-668798497.jpg'alt=''/>
   </div>
      

)
        }
    
    }   


 export default header