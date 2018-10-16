import React, { Component } from 'react';
import './App.css';
import PhotoGallery from './components/gallery';
let images = [{ url: "https://i.postimg.cc/dVgSr1vy/lgbt.jpg", caption: "LGBT" },
 { url: "https://i.postimg.cc/vBtp78Pk/dog.jpg", caption: "Dog" }, 
  { url: "https://i.postimg.cc/zGHW3sfk/smit-patel-344842-unsplash.jpg", caption: "Tiger" },]
class App extends Component {

  render() {
    return (
      <div className="App">
        <PhotoGallery images={images} type="default"/>
      </div>
    );
  }
}

export default App;
