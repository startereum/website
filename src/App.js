import React, { Component } from 'react';
import {Header} from './components/header';
import {FirstFold} from './components/FirstFold';
import {Slides} from './components/Slides';
class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <FirstFold />
        <Slides />
      </div>
    );
  }
}

export default App;
