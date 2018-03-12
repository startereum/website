import React, { Component } from 'react';
import {Cont, Row, Col, Section} from '../styles/grid.js';
import {H1, H4, P} from '../styles/typo';
import {Button} from '../styles/form';
import {Img} from '../styles/media';
import {data} from '../content/data';
import BannerImage from '../assets/placeholder.jpeg';

class FirstFold extends Component {
  render () {
    return (
      <Section>
        <Cont>
          <Row>
            <Col s='12' m='6' offsetM='6'>
              <Img src={BannerImage} />
            </Col>
          </Row>
          <Row>
            <Col s='12' m='6'>
              <H1 variant='bigheading' >{data.banner.heading}</H1>
              <P>{data.banner.subheading}</P>
            </Col>
          </Row>
          <Row>
            <Col s='12' m='6'>
              <Button type='primary' href={data.banner.button.whitepaper.href}>{data.banner.button.whitepaper.label}</Button>
              <Button href={data.banner.button.telegram.href}>{data.banner.button.telegram.label}</Button>
            </Col>
            <Col s='12' m='6'>
              <H4>Latest News</H4>
              <P variant='newsbox'>
                {data.banner.news.text}
              </P>
            </Col>
          </Row>
        </Cont>
      </Section>
    );
  }
}

export {FirstFold};
