import glamorous from 'glamorous'
import {Config} from './variables'

const Cont = glamorous.div({
  maxWidth: 1180,
  width: '100%',
  margin: '0 auto',
  paddingLeft: Config.gridGutter,
  paddingRight: Config.gridGutter
})

const Row = glamorous.div({
  marginRight: -Config.gridGutter,
  marginLeft: -Config.gridGutter,
  ':after': {
    content: '""',
    display: 'table',
    clear: 'both'
  }
},
(props) => ({
  backgroundColor: (props.variant === 'light') ? Config.colors.bgLight : 'initial'
})
)

const Col = glamorous.div({
  minHeight: 1,
  paddingLeft: Config.gridGutter,
  paddingRight: Config.gridGutter
},
(props) => {
  return {
    textAlign: (props.align === 'center') ? 'center' : 'left',
    paddingTop: (props.Pt) ? props.Pt : 0,
    float: (props.variant === 'rightFloat') ? 'right' : 'left'
  }
},
(props) => {
  props.s = (props.s) ? props.s : Config.gridSize
  props.m = (props.m) ? props.m : props.s
  props.l = (props.l) ? props.l : props.m
  props.offsetS = (props.offsetS) ? props.offsetS : 0
  props.offsetM = (props.offsetM) ? props.offsetM : props.offsetS
  props.offsetL = (props.offsetL) ? props.offsetL : props.offsetM
  return {
    [Config.media.phone]: {
      width: props.s ? 100 / (Config.gridSize / props.s) + '%' : '100%',
      marginLeft: props.offsetS ? 100 / (Config.gridSize / props.offsetS) + '%' : '0'
    },
    [Config.media.tab]: {
      width: props.m ? 100 / (Config.gridSize / props.m) + '%' : '100%',
      marginLeft: props.offsetM ? 100 / (Config.gridSize / props.offsetM) + '%' : '0'
    },
    [Config.media.screen]: {
      width: props.l ? 100 / (Config.gridSize / props.l) + '%' : '100%',
      marginLeft: props.offsetL ? 100 / (Config.gridSize / props.offsetL) + '%' : '0'
    }
  }
}
)

const Section = glamorous.section({
  width: '100%',
  paddingTop: 80,
  paddingBottom: 80
},
(props) => ({
  background: (props.variant === 'light') ? Config.colors.bgLight : Config.colors.bgWhite,
  borderTop: (props.variant === 'light') ? 'thin solid ' + Config.colors.sectionBorder : '0',
  borderBottom: (props.variant === 'light') ? 'thin solid ' + Config.colors.sectionBorder : '0'
})
)

export {Row, Cont, Col, Section}
