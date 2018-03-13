import React, { Component } from 'react';
import {Row, Col} from '../styles/grid.js';
import {Card, CardsWrapper} from '../styles/media';
class FeatureCards extends Component {
  render () {
    return (
      <CardsWrapper>
        <Row variant='light'>
          <Col>
            <Card>
              <p> A Unique Value Creation Token</p>
            </Card>
            <Card>
              <p> Backed by a Growing Asset Pool</p>
            </Card>
            <Card>
              <p> Flows Circularly between Platform and Community</p>
            </Card>
            <Card>
              <p> Mined through Proof of Human Work</p>
            </Card>
            <Card>
              <p> <b>ERC 20</b> Standard on Ethereum</p>
            </Card>
          </Col>
        </Row>
      </CardsWrapper>
    );
  }
}

export {FeatureCards};
