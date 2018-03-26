import React, { Component } from 'react'
import {Cont, Row, Col, Section} from '../styles/grid.js'
import {H2, P} from '../styles/typo'
import {Img} from '../styles/media'
import {data} from '../content/data'
import {FeatureCards} from './FeatureCards'

class StrDesc extends Component {
  render () {
    return (
      <Section>
        <Cont>
          <Row>
            <Col s='2' offsetS='5'>
              <Img src={`${process.env.PUBLIC_URL}/assets/coin.svg`} />
            </Col>
            <Col s='12' m='8' offsetM='2'>
              <H2 variant='bigheading' align='center'>{data.strDescription.heading}</H2>
              <P>{data.strDescription.description}</P>
              <FeatureCards />
            </Col>
          </Row>
        </Cont>
      </Section>
    )
  }
}

export {StrDesc}
