import glamorous from 'glamorous';

const Header = glamorous.div({
  background: '#fff',
  maxHeight: 70,
  overflow: 'hidden'

});

const Logo = glamorous.div({
  height: 70,
  width: 100,
  float: 'left',
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',
  '::after': {
    content: 'logo',
    fontWeight: 600,
    lineHeight: 70,
    color: '#222',
    fontSize: 42
  }
});

export {Header, Logo};
