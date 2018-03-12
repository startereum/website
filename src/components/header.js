import React, { Component } from 'react';
import {SHeader, SLogo} from '../styles/header.js';
import {Cont, Row, Col} from '../styles/grid.js';

class Header extends Component {
  render () {
    return (
      <Cont>
        <SHeader>
          <Row>
            <Col>
              <SLogo />
            </Col>
          </Row>
        </SHeader>
      </Cont>
    );
  }
}

export {Header};
