import React, { Component } from 'react'
import {Cont, Col} from '../styles/grid.js'
import {H1, P} from '../styles/typo'
import {Button} from '../styles/form'
import {Space} from '../styles/media'
import {FirstFoldBg} from '../styles/pageStyles.js'
import {data} from '../content/data'

class FirstFold extends Component {
  render () {
    return (
      <Cont>
        <FirstFoldBg bg={`${process.env.PUBLIC_URL}/assets/mainIllustration.svg`}>
          <Col s='12' m='5'>
            <Space mt='250'>
              <H1 variant='bigheading' >{data.banner.heading}</H1>
              <P variant='heavy'>{data.banner.subheading}</P>
            </Space>
            <Space mt='100' mb='80'>
              <Button type='primary' href={data.banner.button.whitepaper.href}>{data.banner.button.whitepaper.label}</Button>
              <Button href={data.banner.button.telegram.href}>{data.banner.button.telegram.label}</Button>
            </Space>
          </Col>
        </FirstFoldBg>
      </Cont>
    )
  }
}

export {FirstFold}
