import React, { Component } from 'react'
import {data} from '../content/data'
import {SlideWrap} from '../styles/pageStyles'
import {Slide} from './Slide'
class Slides extends Component {
  render () {
    return (
      <SlideWrap>
        {data.slides.map(function (slide, ind) {
          return (
            <Slide key={ind} data={slide} />
          )
        })}
      </SlideWrap>
    )
  }
}

export {Slides}
