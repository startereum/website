import React, { Component } from 'react'
import {Cont, Row, Col, Section} from '../styles/grid.js'
import {H2, P} from '../styles/typo'
import {Img} from '../styles/media'

class Slide extends Component {
  render () {
    return (
      <Section variant={this.props.data.bg}>
        <Cont>
          <Row>
            <Col s='12' m='6' variant={this.props.data.variant}>
              <Img src={`${process.env.PUBLIC_URL + this.props.data.image}`} />
            </Col>
            <Col s='12' m='6'>
              <H2 variant='slideHeading' >
                {
                this.props.data.heading.map(function (line) {
                  return (
                    <span>
                      {line}
                      <br />
                    </span>
                  )
                })
                }
              </H2>
              {
                this.props.data.description.map(function (line) {
                  return (
                    <P>
                      {line}
                      <br />
                      <br />
                    </P>
                  )
                })
              }
            </Col>
          </Row>
        </Cont>
      </Section>
    )
  }
}

export {Slide}
