import React, { Component } from 'react';
import {Header} from './components/header';
import {FirstFold} from './components/FirstFold';
import {Slides} from './components/Slides';
import {StrDesc} from './components/StrDesc';
import {Team} from './components/Team';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <FirstFold />
        <Slides />
        <StrDesc />
        <Team />
      </div>
    );
  }
}

export default App;
