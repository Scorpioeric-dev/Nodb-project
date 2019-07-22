import React, { Component } from "react";
import axios from "axios";
import Search from './search'



class header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newStyle: "",
      userInput: ""
    };
  }

  handleChange(e) {
    this.setState({
      userInput: e
    });
  }

  render() {
    return (
      <main>
        <header className="Barberpoles">
          <Search/>
          <h1 id="header">Tu Estilo</h1>
          <Search/>
        </header>
        <div className="searchbar">
          <input onChange={e => this.handleChange(e.target.value)} size="20" placeholder='Hairstyle' />
          <button onClick={() => this.props.getStyle(this.state.userInput)}>
            search
          </button>
        </div>
      </main>
    );
  }
}

export default header;
