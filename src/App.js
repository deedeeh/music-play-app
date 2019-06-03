// Third party dependencies
import React from 'react';
import { Image } from 'semantic-ui-react';

// relative paths dependencies
import './App.css';
import headerBg from './assets/images/header_bg.png';
import logo from './assets/images/MusicPlay_logo.png';

function App() {
  return (
    <div className="App">
      <header className="App_header">
        <Image
          className="header_img"
          src={headerBg}
          alt="Black strips on a cyan background header image."
        />
        <Image className="logo" src={logo} alt="Music play word logo" />
      </header>
    </div>
  );
}

export default App;
