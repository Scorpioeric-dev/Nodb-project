import React, { Component } from "react";
import axios from "axios";
import search from "./search";
import Header from "./header";
import Flip from "react-reveal/Flip";

class styleCont extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uStyleArray: [],
      currentImg: this.props.currentImg,
      userInput: "", //search field
      imgInput: "", //img input
      styleInput: "", // specific style
      filteredStyle: [],
      filteredId: 0,
      editing: false
    };
    this.getStyles = this.getStyles.bind(this);
    this.addStyleToArray = this.addStyleToArray.bind(this);
  }
//get Styles is a query
  getStyles(userInput) {
    let filteredStyle = this.props.uStyles.filter(ele => {
      return ele.name.toLowerCase().includes(userInput.toLowerCase());
    });
    if (filteredStyle[0]) {
      this.setState({
        currentImg: filteredStyle[0].img,
        filteredId: filteredStyle[0].id
      });
    } else {
      alert("Does not Exist");
    }
    // console.log(userInput);
  }
  handleChange(e) {
    this.setState({
      userInput: e
    });
  }
  toggleEdit() {
    this.setState({ editing: !this.state.editing });
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

  addStyleToArray() {
    // console.log();
    this.props.addStyle({
      name: this.state.styleInput,
      img: this.state.imgInput
    });
  }
  save() {
    //need to pass in the id and body(obj:name,img)
    if (this.state.styleInput === "" || this.state.imgInput === "") {
      alert("Please enter text");
    } else {
      this.props.styleUpdate(this.state.filteredId, {
        name: this.state.styleInput,
        img: this.state.imgInput
      });
      this.toggleEdit();
    }
  }

  render() {
    // console.log(this.state)
    return (
      <section>
        <Header getStyle={this.getStyles} />
        <input
          onChange={e => this.imgChange(e.target.value)}
          placeholder="image"
        />
        <input
          onChange={e => this.addStyle(e.target.value)}
          placeholder="styleName"
        />
        <button onClick={() => this.props.removeStyle(this.state.filteredId)}>
          Delete
        </button>
        
        <button onClick={() => this.addStyleToArray()}>enter</button>

        {this.state.editing ? (
          <article>
            <button onClick={() => this.save()}>save</button>
            <button onClick={() => this.toggleEdit()}>cancel</button>
          </article>
        ) : (
          <button onClick={() => this.toggleEdit()}>edit</button>
        )}
        <Flip right>
          <img className="mainImg" src={this.state.currentImg} alt="" />
        </Flip>
      </section>
    );
  }
}

export default styleCont;
