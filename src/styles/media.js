import glamorous from 'glamorous'
import {Config} from './variables'

const Img = glamorous.img({
  width: '100%'
},
(props) => ({
  [Config.media.phone]: {
    display: (props.type === 'mobile') ? 'block' : ((props.type === 'tab-screen') ? 'none' : 'initial')
  },
  [Config.media.tab]: {
    display: (props.type === 'mobile') ? 'none' : 'block'
  },
  [Config.media.screen]: {
    display: (props.type === 'mobile') ? 'none' : 'block'
  }
})
)

const Card = glamorous.div({
  float: 'left',
  margin: '3% 1%',
  background: Config.colors.white,
  textAlign: 'center',
  position: 'relative',
  border: 'thin solid ' + Config.colors.primaryBorder,
  transition: 'background 0.3s linear',
  borderRadius: Config.borderRadius.md,
  ':before': {
    content: '""',
    position: 'absolute',
    border: 'thin solid ' + Config.colors.primaryBorder,
    borderTop: '0',
    borderBottom: '0',
    width: '90%',
    left: '4%',
    height: '0',
    top: '50%',
    transition: 'all 0.2s linear'
  },
  ':after': {
    content: '""',
    position: 'absolute',
    border: 'thin solid ' + Config.colors.primaryBorder,
    borderLeft: '0',
    borderRight: '0',
    width: '0%',
    left: '50%',
    height: '90%',
    top: '4%',
    transition: 'all 0.2s linear'
  },
  ' p': {
    margin: 0,
    padding: 8,
    fontSize: 'inherit',
    width: '100%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transition: 'transform 0.3s linear',
    transformOrigin: '0 0',
    transform: 'scale(0.95) translate(-50%,-50%)'
  },
  ':hover': {
    background: Config.colors.bgLight,
    transition: 'background 0.3s linear',
    borderRadius: 0,
    boxShadow: '0px 0px 9px ' + Config.colors.primaryBorder,
    ':before': {
      height: '90%',
      top: '4%',
      transition: 'all 0.2s linear'
    },
    ':after': {
      width: '90%',
      left: '4%',
      transition: 'all 0.2s linear'
    }
  },
  ':hover p': {
    transform: 'scale(1) translate(-50%,-50%)',
    transition: 'transform 0.3s linear'
  },
  [Config.media.phone]: {
    width: '100%',
    minHeight: 120
  },
  [Config.media.tab]: {
    width: '18%',
    minHeight: 150
  },
  [Config.media.screen]: {
    width: '18%'
  }
})

const CardsWrapper = glamorous.div({
  marginTop: 30,
  padding: '0 15px'
})

const Space = glamorous.div(
  (props) => ({
    [Config.media.phone]: {
      marginLeft: (props.mlS) ? props.mlS : 0,
      marginRight: (props.mrS) ? props.mrS : 0,
      marginTop: (props.mtS) ? props.mtS : 0,
      marginBottom: (props.mbS) ? props.mbS : 0
    },
    [Config.media.tab]: {
      marginLeft: (props.mlM) ? props.mlM : 0,
      marginRight: (props.mrM) ? props.mrM : 0,
      marginTop: (props.mtM) ? props.mtM : 0,
      marginBottom: (props.mbM) ? props.mbM : 0
    },
    [Config.media.screen]: {
      marginLeft: (props.mlL) ? props.mlL : 0,
      marginRight: (props.mrL) ? props.mrL : 0,
      marginTop: (props.mtL) ? props.mtL : 0,
      marginBottom: (props.mbL) ? props.mbL : 0
    }
  })
)

export {Img, Card, CardsWrapper, Space}
