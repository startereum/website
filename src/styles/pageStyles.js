import glamorous from 'glamorous';
import {Config} from './variables';

const SHeader = glamorous.div({
  background: '#fff',
  maxHeight: 70,
  overflow: 'hidden'
});

const SLogo = glamorous.div({
  height: 70,
  width: 200,
  float: 'left',
  backgroundSize: '100% 65%',
  backgroundPosition: '-15px center',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/logo.png)`
});

const Img = glamorous.img({
  width: '100%'
});

const SlideWrap = glamorous.div({
  marginTop: 90
});

const FirstFoldBg = glamorous.div({
  marginRight: -Config.gridGutter,
  marginLeft: -Config.gridGutter,
  backgroundRepeat: 'no-repeat',
  ':after': {
    content: '""',
    display: 'table',
    clear: 'both'
  }
},
(props) => ({
  backgroundImage: props.bg ? `url(${props.bg})` : '',
  [Config.media.phone]: {
    backgroundPosition: 'top',
    backgroundSize: '100% 250px'
  },
  [Config.media.screen]: {
    backgroundPosition: 'right',
    backgroundSize: '75% 100%'
  }

})
);

const TeamSection = glamorous.div({
});

const TeamList = glamorous.ul({
  listStyle: 'none',
  maxWidth: '100%',
  ' li': {
    width: 200,
    height: 200,
    backgroundColor: Config.colors.bgWhite,
    display: 'inline-block',
    marginRight: 10,
    marginBottom: 10,
    position: 'relative',
    verticalAlign: 'top',
    transition: 'all 0.5s ease-out'
  },
  ' li:hover': {
    backgroundColor: Config.colors.bgLight,
    boxShadow: '0px 1px 2px rgba(0,0,0,0.3),0px -1px 2px rgba(0,0,0,0.1)',
    transition: 'all 0.5s ease-out'
  },
  ' li img': {
    position: 'absolute',
    height: '100%',
    width: '100%',
    left: 0,
    opacity: 1,
    top: 0,
    filter: 'grayscale(100%)',
    transition: 'all 0.5s ease-out'
  },
  ' li div': {
    opacity: 0,
    transition: 'all 1s ease-out 0.2s'
  },
  ' li:hover div': {
    transition: 'all 1s ease-out 0.2s',
    opacity: 1
  },
  ' li:hover img': {
    transform: 'scale(0)',
    transformOrigin: 'center center',
    transition: 'all 0.5s ease-out',
    opacity: 0
  }
});

const TeamListHeading = glamorous.h2({
  fontSize: Config.fontSizes.h2,
  fontWeight: 500,
  margin: '80px 0 30px'
});

const TeamMemberName = glamorous.h5({
  fontSize: 13,
  fontWeight: 500,
  margin: '80px 0 10px'
});

const TeamMemberTag = glamorous.p({
  fontSize: 12,
  fontWeight: 300,
  margin: 0
});

export {SHeader, SLogo, Img, SlideWrap, FirstFoldBg, TeamSection, TeamList, TeamListHeading, TeamMemberName, TeamMemberTag};
