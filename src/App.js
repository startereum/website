import React, { Component } from 'react';
import {Header, Logo} from './styles/components.js';
import {Cont, Row} from './styles/grid.js';
class App extends Component {
  render () {
    return (
      <div className='App'>
        <Cont>
          <Header>
            <Logo />
          </Header>
        </Cont>
      </div>
    );
  }
}

export default App;
