import glamorous from 'glamorous';
import {Config} from './variables';

const SHeader = glamorous.div({
  background: '#fff',
  maxHeight: 70,
  overflow: 'hidden'

});

const SLogo = glamorous.div({
  height: 70,
  width: 100,
  float: 'left',
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',
  '::after': {
    content: 'logo',
    fontWeight: 600,
    lineHeight: '70px',
    color: Config.colors['black-1'],
    fontSize: 42
  }
});

const Img = glamorous.img({
  width: '100%'
});

const SlideWrap = glamorous.div({
  marginTop: 90
});

export {SHeader, SLogo, Img, SlideWrap};
