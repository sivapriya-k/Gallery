import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PhotoGallery from './components/PhotoGallery';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">Welcome to PhotoGallery</header>
          <PhotoGallery/>
      </div>
    );
  }
}

export default App;
