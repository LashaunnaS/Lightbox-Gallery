import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import PhotoGrid from './components/photoGrid/PhotoGrid';

class App extends Component {
  state = {
    imgs: [],
  }

  componentDidMount() {
    fetch('https://api.unsplash.com/photos/?client_id=669951a19eac02bd0629eaabbe929c467e854b4a8a3b06e7ab3b720cc28c6d25')
      .then(response => response.json())
      .then(responseData => {
        let images = responseData.map(x => x.urls.regular)
          this.setState({imgs: images})
        })
    }

  render() {
    return (
      <div>
        <Header />
        <PhotoGrid imgs={this.state.imgs} />
      </div>
    );
  }
}


export default App;
