import React, { Component } from 'react';
import {Cont, Row, Col, Section} from '../styles/grid.js';
import {H2, P} from '../styles/typo';
import {Img} from '../styles/media';

class Slide extends Component {
  render () {
    let createMarkup = (line) => ({__html: line});
    return (
      <Section variant={this.props.data.bg}>
        <Cont>
          <Row>
            <Col s='12' m='6' variant={this.props.data.variant}>
              <Img src={`${process.env.PUBLIC_URL + this.props.data.image}`} />
            </Col>
            <Col s='12' m='6'>
              <H2 variant='slideHeading' dangerouslySetInnerHTML={createMarkup(this.props.data.heading)}  />
              <P dangerouslySetInnerHTML={createMarkup(this.props.data.description)}  />
            </Col>
          </Row>
        </Cont>
      </Section>
    );
  }
}

export {Slide};
