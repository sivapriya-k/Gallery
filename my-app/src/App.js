import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PhotoGallery from './components/PhotoGallery';

class App extends Component {
  render() {

      let imgUrls = [
          {url :'https://source.unsplash.com/3Z70SDuYs5g/800x600', caption: "First"},
          {url : 'https://source.unsplash.com/01vFmYAOqQ0/800x600', caption: "Second"},
          {url : 'https://source.unsplash.com/2Bjq3A7rGn4/800x600', caption: "Third"},
          {url : 'https://source.unsplash.com/t20pc32VbrU/800x600', caption: "Fourth"},
          {url : 'https://source.unsplash.com/pHANr-CpbYM/800x600', caption: "Fifth"},
          {url : 'https://source.unsplash.com/3PmwYw2uErY/800x600', caption: "Sixth"},
          {url : 'https://source.unsplash.com/uOi3lg8fGl4/800x600', caption: 'Seventh'},
          {url : 'https://source.unsplash.com/CwkiN6_qpDI/800x600', caption: 'Eighth'},
          {url : 'https://source.unsplash.com/9O1oQ9SzQZQ/800x600', caption: 'Ninth'},
          {url : 'https://source.unsplash.com/E4944K_4SvI/800x600', caption: 'Tenth'},
          {url : 'https://source.unsplash.com/-hI5dX2ObAs/800x600', caption: '11th'},
          {url : 'https://source.unsplash.com/vZlTg_McCDo/800x600', caption: 'twelfth'}
      ];

      return (
      <div className="App">
          <header className="App-header">Welcome to PhotoGallery</header>
          <PhotoGallery images={imgUrls}/>
      </div>
    );
  }
}

export default App;
