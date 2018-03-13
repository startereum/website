import React, { Component } from 'react';
import {Cont, Row, Col, Section} from '../styles/grid.js';
import {H2, P} from '../styles/typo';
import {Img} from '../styles/media';
import {data} from '../content/data';

class Slides extends Component {
  render () {
    const Slide1Image = require('../assets/placeholder.jpeg');
    const Slide2Image = require('../assets/placeholder.jpeg');
    const Slide3Image = require('../assets/placeholder.jpeg');
    return (
      <div>
        <Section variant='light'>
          <Cont>
            <Row>
              <Col s='12' m='6'>
                <H2 variant='slideHeading' >{data.slides[0].heading}</H2>
                <P>{data.slides[0].description}</P>
                <P>{data.slides[0].description[1]}</P>
              </Col>
              <Col s='12' m='6'>
                <Img src={Slide1Image} />
              </Col>
            </Row>
          </Cont>
        </Section>
        <Section >
          <Cont>
            <Row>
              <Col s='12' m='6'>
                <Img src={Slide2Image} />
              </Col>
              <Col s='12' m='6'>
                <H2 variant='slideHeading' >{data.slides[1].heading}</H2>
                <P>{data.slides[1].description[0]}</P><br />
              </Col>
            </Row>
          </Cont>
        </Section>
        <Section variant='light'>
          <Cont>
            <Row>
              <Col s='12' m='6'>
                <H2 variant='slideHeading' >{data.slides[2].heading}</H2>
                <P>{data.slides[2].description[0]}</P><br />
              </Col>
              <Col s='12' m='6'>
                <Img src={Slide3Image} />
              </Col>
            </Row>
          </Cont>
        </Section>
        <Section >
          <Cont>
            <Row>
              <Col s='12' m='6'>
                <Img src={Slide2Image} />
              </Col>
              <Col s='12' m='6'>
                <H2 variant='slideHeading' >{data.slides[3].heading}</H2>
                <P>{data.slides[3].description[0]}</P><br />
              </Col>
            </Row>
          </Cont>
        </Section>
        <Section variant='light'>
          <Cont>
            <Row>
              <Col s='12' m='6'>
                <H2 variant='slideHeading' >{data.slides[4].heading}</H2>
                <P>{data.slides[4].description[0]}</P><br />
              </Col>
              <Col s='12' m='6'>
                <Img src={Slide3Image} />
              </Col>
            </Row>
          </Cont>
        </Section>
      </div>
    );
  }
}

export {Slides};
