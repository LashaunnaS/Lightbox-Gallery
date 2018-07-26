import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import PhotoGrid from './components/photoGrid/PhotoGrid';

class App extends Component {
  state = {
    pic: {}
  }

  render() {
    return (
      <div>
        <Header />
        <PhotoGrid pic={this.state.pic} />
      </div>
    );
  }
}

const numItemsToGenerate = 8; //how many gallery items you want on the screen
const imageWidth = 480; //your desired image width in pixels
const imageHeight = 480; //desired image height in pixels
const collectionID = 158642; //the collection ID from the original url

function renderGalleryItem(){
  fetch(`https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/`).then((response)=> {    
   this.setState({pic: response.url})
  }) 
  for(let i=0;i<numItemsToGenerate;i++){
    renderGalleryItem();
  }

}

export default App;
