/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
// Third party dependencies
import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';

// relative paths dependencies
import VideosCollection from 'components/VideosCollection/VideosCollection'
import './App.css';
import headerBg from 'assets/images/header_bg.png';
import logo from 'assets/images/MusicPlay_logo.png';

class App extends Component {
  state = {
    videosList: [],
    selectedCard: undefined,
  };

  componentDidMount() {
    fetch(
      'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw'
    )
      .then(res => res.json())
      .then(data =>
        this.setState({
          videosList: [...data.items],
        })
      );
  }

  render() {
    return (
      <div className= "App">
        <header className= "App_header">
          <Image
            className= "header_img"
            src= {headerBg}
            alt= "Black strips on a cyan background header image."
          />
          <Image className= "logo" src= {logo} alt= "Music play word logo" />
        </header>
        <main>
          <VideosCollection videosList= {this.state.videosList} />
        </main>
      </div>
    );
  }
}

export default App;
