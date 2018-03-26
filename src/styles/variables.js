const Config = {
  gridSize: 12,
  gridGutter: 15,
  media:
  {
    phone: '@media only screen and (min-width: 320px)',
    tab: '@media only screen and (min-width: 768px)',
    screen: '@media only screen and (min-width: 1024px)'
  },
  colors:
  {
    white: '#ffffff',
    'black-1': '#222',
    primary: 'rgba(0,123,255,1)',
    primaryBorder: 'rgba(0,123,255,0.2)',
    sectionBorder: 'rgba(0,123,255,0.1)',
    bgLight: '#fafafa',
    bgWhite: '#ffffff'
  },
  fontSizes:
  {
    h1: {screen: '3.56rem', mobile: '2rem'},
    h2: {screen: '2.25rem', mobile: '1.625rem'},
    h3: {screen: '1.75rem', mobile: '1.375rem'},
    h4: {screen: '1.125rem', mobile: '1.125rem'},
    text: {screen: '1rem', mobile: '1rem'},
    anchor: {screen: '0.75rem', mobile: '1rem'}
  },
  borderRadius:
  {
    'xs': '2px',
    'sm': '3px',
    'md': '4px',
    'lg': '5px',
    'xl': '8px',
    'O': '50%'
  }
};

export {Config};
