import glamorous from 'glamorous';
import {Config} from './variables'

const Img = glamorous.img({
  width: '100%'
});

const Card = glamorous.div({
  float: 'left',
  margin: '3% 1%',
  background: Config.colors.white,
  textAlign: 'center',
  position: 'relative',
  border: 'thin solid ' + Config.colors.primaryBorder,
  transition: 'background 0.3s linear',
  borderRadius: Config.borderRadius.sm,
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
});

const CardsWrapper = glamorous.div({
  marginTop: 30,
  padding: '0 15px'
});

export {Img, Card, CardsWrapper};
