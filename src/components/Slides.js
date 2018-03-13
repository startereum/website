import React, { Component } from 'react';
import {Cont, Row, Col, Section} from '../styles/grid.js';
import {H2, P} from '../styles/typo';
import {Img} from '../styles/media';
import {data} from '../content/data';
import {SlideWrap} from '../styles/pageStyles';

class Slides extends Component {
  render () {
    return (
      <SlideWrap>
        <Section variant='light'>
          <Cont>
            <Row>
              <Col s='12' m='6'>
                <H2 variant='slideHeading' >{data.slides[0].heading}</H2>
                <P>{data.slides[0].description}</P>
                <P>{data.slides[0].description[1]}</P>
              </Col>
              <Col s='12' m='6'>
                <Img src={`${process.env.PUBLIC_URL}/assets/slide1.jpeg`} />
              </Col>
            </Row>
          </Cont>
        </Section>
        <Section >
          <Cont>
            <Row>
              <Col s='12' m='6'>
                <Img src={`${process.env.PUBLIC_URL}/assets/slide2.jpg`} />
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
                <Img src={`${process.env.PUBLIC_URL}/assets/slide2.jpg`} />
              </Col>
            </Row>
          </Cont>
        </Section>
        <Section >
          <Cont>
            <Row>
              <Col s='12' m='6'>
                <Img src={`${process.env.PUBLIC_URL}/assets/slide4.jpg`} />
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
                <Img src={`${process.env.PUBLIC_URL}/assets/slide1.jpeg`} />
              </Col>
            </Row>
          </Cont>
        </Section>
      </SlideWrap>
    );
  }
}

export {Slides};
