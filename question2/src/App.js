import React, { Component } from 'react';
import './App.css';
import Images from './images';
let images = ["iamge1"]
class App extends Component {

  render() {
    return (
      <div className="App">
        <Images images={images} type="default"/>
      </div>
    );
  }
}

export default App;
