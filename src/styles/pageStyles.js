import glamorous from 'glamorous'
import {Config} from './variables'

const SHeader = glamorous.div({
  background: '#fff',
  maxHeight: 70,
  overflow: 'hidden'
})

const SLogo = glamorous.div({
  height: 70,
  width: 200,
  float: 'left',
  backgroundSize: '100% 65%',
  backgroundPosition: '-15px center',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/logo.png)`
})

const Img = glamorous.img({
  width: '100%'
})

const SlideWrap = glamorous.div({
  marginTop: 90
})

const FirstFoldBg = glamorous.div({
  marginRight: -Config.gridGutter,
  marginLeft: -Config.gridGutter,
  backgroundSize: '75% 100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right',
  ':after': {
    content: '""',
    display: 'table',
    clear: 'both'
  }
},
(props) => ({
  backgroundImage: props.bg ? `url(${props.bg})` : ''
}
))

export {SHeader, SLogo, Img, SlideWrap, FirstFoldBg}
