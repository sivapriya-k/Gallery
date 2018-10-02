import React, { Component } from 'react';
import './App.css';
import PhotoGallery from './components/PhotoGallery';

class App extends Component {
  render() {

      let imgUrls = [
          {url :'https://source.unsplash.com/3Z70SDuYs5g/800x600', caption: "Mountain view"},
          {url : 'https://source.unsplash.com/01vFmYAOqQ0/800x600', caption: "Rocks on the Sea"},
          {url : 'https://source.unsplash.com/2Bjq3A7rGn4/800x600', caption: "Ice filled mountains"},
          {url : 'https://source.unsplash.com/t20pc32VbrU/800x600', caption: "blue whale"},
          {url : 'https://source.unsplash.com/pHANr-CpbYM/800x600', caption: "high waterfall"},
          {url : 'https://source.unsplash.com/3PmwYw2uErY/800x600', caption: "Peacock"},
          {url : 'https://source.unsplash.com/uOi3lg8fGl4/800x600', caption: 'ice fields'},
          {url : 'https://source.unsplash.com/CwkiN6_qpDI/800x600', caption: 'cow on the fields'},
          {url : 'https://source.unsplash.com/9O1oQ9SzQZQ/800x600', caption: 'deep thought'},
          {url : 'https://source.unsplash.com/E4944K_4SvI/800x600', caption: 'volcano'},
          {url : 'https://source.unsplash.com/-hI5dX2ObAs/800x600', caption: 'random'},
          {url : 'https://source.unsplash.com/vZlTg_McCDo/800x600', caption: 'snow mountain'}
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
