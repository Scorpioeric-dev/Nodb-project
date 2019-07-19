import React, { Component } from "react";
import axios from "axios";
import search from "./search";
import Header from "./header";

class styleCont extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uStyleArray: [],
      currentImg:
        "https://i.pinimg.com/originals/0a/8e/af/0a8eaf814cfda849b7b71c75f38fac96.jpg",
      userInput: "",
      imgInput: "",
      styleInput: "",
      filteredStyle: [],
      filteredId:0
    };
    this.getStyles = this.getStyles.bind(this);
   
  }
  componentDidMount() {
    axios.get("/api/styles").then(res => {
      this.setState({
        uStyleArray: res.data
      });
    });
  }
  

  getStyles(userInput) {
    let filteredStyle = this.state.uStyleArray.filter(ele => {
      return ele.name.toLowerCase() === userInput.toLowerCase();
    });
    this.setState({
      currentImg: filteredStyle[0].img,
      filteredId:filteredStyle[0].id
    });
    console.log(userInput);
  }
  handleChange(e) {
    this.setState({
      userInput: e
    });
  }
  
  
  imgChange(e) {
    this.setState({
      imgInput: e
    });
  }
  addStyle(style) {
    this.setState({
      styleInput: style
    });
  }
  render() {
    // console.log(this.state)
    return (
      <div>
        <Header getStyle={this.getStyles} />
        <input
          onChange={e => this.imgChange(e.target.value)}
          placeholder="imagechange"
        />
        <input
          onChange={e => this.addStyle(e.target.value)}
          placeholder="styleChange"
        />
        <input
          onChange={e => this.handleChange(e.target.value)}
          placeholder="search"
        />
        <img src={this.state.currentImg} alt="" />
        <button onClick = {() => this.props.removeStyle(this.state.filteredId)}>'_'</button>
        <button onClick = {() => this.props.addStyle(this.state.styleInput)}>enter</button>
      </div>
    );
  }
}

export default styleCont;
