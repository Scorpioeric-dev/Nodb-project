import React, { Component } from "react";
import "./App.css";
import Header from "./header";
import axios from "axios";
import StyleCont from "./styleCont";
import Search from "./search";

class App extends Component {
  constructor() {
    super();
    this.state = {
      uStyles: [],
      currentImg:
        "https://i.pinimg.com/originals/0a/8e/af/0a8eaf814cfda849b7b71c75f38fac96.jpg"
    };
    this.removeStyle = this.removeStyle.bind(this);
    this.addStyle = this.addStyle.bind(this);
    this.styleUpdate = this.styleUpdate.bind(this);
  }

  componentDidMount() {
    this.getHaircut();
  }

  getHaircut() {
    axios
      .get("/api/styles")
      .then(res => {
        console.log(res.data[res.data.length - 1].img);
        this.setState({
          uStyles: res.data,
          currentImg: res.data[res.data.length - 1].img
        });
      })
      .catch(function(error) {
        error = "NO GET";
        alert(error);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    //  console.log(this.state.uStyles,prevState)
    if (
      prevState.uStyles.length &&
      prevState.uStyles.length !== this.state.uStyles.length
    ) {
      this.getHaircut();
    }
  }

  removeStyle(id) {
    // console.log(id)
    axios.delete(`/api/styles/${id}`).then(res => {
      this.setState({
        uStyles: res.data,
        currentImg: res.data[res.data.length - 1].img
      });
    });
  }

  addStyle(body) {
    axios.post("/api/styles", body).then(res => {
      console.log(res.data);
      this.setState({ uStyles: res.data });
    });
  }
  styleUpdate(id, body) {
    axios.put(`/api/styles/${id}`, body).then(res => {
      console.log(res.data);
      this.setState({ uStyles: res.data });
    });
  }

  render() {
    return (
      <main className="App">
        <StyleCont
          currentImg={this.state.currentImg}
          removeStyle={this.removeStyle}
          addStyle={this.addStyle}
          uStyles={this.state.uStyles}
          styleUpdate={this.styleUpdate}
        />
      </main>
    );
  }
}

export default App;
