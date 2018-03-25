import glamorous from 'glamorous'
import {Config} from './variables'

const H1 = glamorous.h1({
  fontWeight: 500,
  margin: 0
},
(props) => {
  return {
    [Config.media.phone]: {
      lineHeight: '1.25',
      margin: (props.variant === 'bigheading') ? '10px 0 20px' : '0',
      fontSize: Config.fontSizes.h1.mobile
    },
    [Config.media.screen]: {
      lineHeight: '1.05',
      margin: (props.variant === 'bigheading') ? '20px 0 30px' : '0',
      fontSize: Config.fontSizes.h1.screen
    }
  }
}
)

const H2 = glamorous.h2({
  fontWeight: 500
},
(props) => ({
  textAlign: props.align === 'center' ? 'center' : 'left'
}),
(props) => {
  return {
    [Config.media.phone]: {
      lineHeight: '1.25',
      margin: (props.variant === 'bigheading') ? '10px 0 20px' : ((props.variant === 'slideHeading') ? '30px 0 20px' : '0'),
      fontSize: Config.fontSizes.h2.mobile
    },
    [Config.media.screen]: {
      lineHeight: '1.05',
      margin: (props.variant === 'bigheading') ? '20px 0 30px' : ((props.variant === 'slideHeading') ? '50px 0 20px' : '0'),
      fontSize: Config.fontSizes.h2.screen
    }
  }
})

const H3 = glamorous.h3({
  fontWeight: 500
},
(props) => {
  return {
    [Config.media.phone]: {
      lineHeight: '1.25',
      margin: (props.variant === 'bigheading') ? '10px 0 20px' : '0',
      fontSize: Config.fontSizes.h3.mobile
    },
    [Config.media.screen]: {
      lineHeight: '1.05',
      margin: (props.variant === 'bigheading') ? '20px 0 30px' : '0',
      fontSize: Config.fontSizes.h3.screen
    }
  }
}
)

const H4 = glamorous.h4({
  fontWeight: 700
},
(props) => {
  return {
    [Config.media.phone]: {
      lineHeight: '1.25',
      margin: (props.variant === 'bigheading') ? '10px 0 20px' : '0',
      fontSize: Config.fontSizes.h4.mobile
    },
    [Config.media.screen]: {
      lineHeight: '1.05',
      margin: (props.variant === 'bigheading') ? '20px 0 30px' : '0',
      fontSize: Config.fontSizes.h4.screen
    }
  }
}
)

const P = glamorous.p({
  margin: 0
},
(props) => ({
  fontWeight: (props.variant === 'heavy') ? 500 : 300
}),
(props) => {
  return {
    [Config.media.phone]: {
      lineHeight: '1.25',
      fontSize: '1rem',
      marginTop: (props.variant === 'newsbox') ? '20px' : '0',
      marginLeft: (props.variant === 'newsbox') ? '0px' : '0',
      paddingLeft: (props.variant === 'newsbox') ? '20px' : '0',
      borderLeft: (props.variant === 'newsbox') ? 'thin solid ' + Config.colors.primaryBorder : '0'
    },
    [Config.media.tab]: {
      lineHeight: '1.375',
      fontSize: '1rem',
      marginTop: (props.variant === 'newsbox') ? '20px' : '0',
      marginLeft: (props.variant === 'newsbox') ? '-30px' : '0',
      paddingLeft: (props.variant === 'newsbox') ? '30px' : '0',
      borderLeft: (props.variant === 'newsbox') ? 'thin solid ' + Config.colors.primaryBorder : '0'
    }
  }
}
)

export {H1, H2, H3, H4, P}
