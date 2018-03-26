import glamorous from 'glamorous';
import {Config} from './variables';

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
);

const Card = glamorous.div({
  float: 'left',
  position: 'relative',
  transition: 'all 0.3s linear',
  textAlign: 'center',
  height: 200,
  letterSpacing: '0.5px',
  fontWeight: 400,
  zIndex: 0,
  backgroundColor: Config.colors.bgLight,
  ' p': {
    margin: 0,
    fontSize: 14,
    width: '95%',
    position: 'absolute',
    transform: 'translate(-50%,-50%)',
    top: '50%',
    left: '50%',
    textTransform: 'uppercase'
  },

  [Config.media.phone]: {
    width: '100%'
  },
  [Config.media.tab]: {
    width: '18%'
  },
  [Config.media.screen]: {
    width: '20%'
  },
  ':hover': {
    backgroundColor: Config.colors.bgWhite,
    boxShadow: '0px 1px 2px rgba(0,0,0,0.1),0px -1px 2px rgba(0,0,0,0.05)',
    zIndex: 1,
    transform: 'translate(0,-5px)',
    color: Config.colors['black-1'],
    transition: 'all 0.3s linear'
  }
});

const Cards = glamorous.div({
  backgroundColor: Config.colors.bgLight,
  ':after': {
    content: '""',
    display: 'table',
    clear: 'both'
  }
});

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
);

export {Img, Card, Cards, Space};
