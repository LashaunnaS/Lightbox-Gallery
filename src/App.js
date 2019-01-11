import React, { Component } from 'react';
import { Sample } from './AppStyles';
import Header from './components/header/Header';
import PhotoGrid from './components/photoGrid/PhotoGrid';
import axios from 'axios';

class App extends Component {
  state = {
    imgs: [],
  }

  async componentDidMount() {
    await axios.get('https://api.unsplash.com/photos/?client_id=669951a19eac02bd0629eaabbe929c467e854b4a8a3b06e7ab3b720cc28c6d25')
      .then(response => {
        let images = response.data.map(x => x.urls.regular)
        this.setState({ imgs: images })
      })
  }

  render() {
    return (
      <Sample>
        <Header />
        <PhotoGrid imgs={this.state.imgs} />
      </Sample>
    );
  }
}


export default App;
