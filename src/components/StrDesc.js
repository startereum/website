import React, { Component } from 'react';
import {Cont, Row, Col, Section} from '../styles/grid.js';
import {H2, P} from '../styles/typo';
import {Img} from '../styles/media';
import {data} from '../content/data';

class StrDesc extends Component {
  render () {
    const CoinImage = require('../assets/coin.png');
    return (
      <Section>
        <Cont>
          <Row>
            <Col s='2' offsetS='5'>
              <Img src={CoinImage} />
            </Col>
            <Col s='12' m='8' offsetM='2'>
              <H2 variant='bigheading' align='center'>{data.strDescription.heading}</H2>
              <P>{data.strDescription.description}</P>
            </Col>
          </Row>
        </Cont>
      </Section>
    );
  }
}

export {StrDesc};