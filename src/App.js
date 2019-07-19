import React, {Component} from 'react'
import './App.css'
import Header from './header'
import axios from 'axios'
import StyleCont from './styleCont'
import Search from './search'


class App extends Component {
constructor(){
  super()
  this.state = {
    uStyles:[],
   
  } 
  this.removeStyle = this.removeStyle.bind(this)
this.addStyle = this.addStyle.bind(this)
}




removeStyle(id){
  axios.delete(`/api/styles/${id}`).then(res => {
    this.setState({
      uStyles: res.data})
    })
  }
  
  addStyle(body){
    axios.post('/api/styles', body).then(res => {
      console.log(res.data)
    this.setState({uStyles: res.data})
  })
}



  render(){
  return (
    <div className="App">
    
    <Search/>
    
    <StyleCont currentImg={this.state.currentImg} removeStyle={this.removeStyle} addStyle={this.addStyle}/>

     
     
    
    </div>
  );
  }

}

export default App;
