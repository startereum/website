import glamorous from 'glamorous'
import {Config} from './variables'

const Button = glamorous.a({
  fontWeight: 500,
  textDecoration: 'none',
  lineHeight: '30px',
  marginRight: '10px',
  display: 'inline-block',
  fontSize: '1rem',
  border: 'thin solid transparent',
  borderRadius: Config.borderRadius.xs,
  ':last-child': {
    marginRight: 0
  }

},
(props) => ({
  color: (props.type === 'primary') ? Config.colors.white : Config.colors.primary,
  background: (props.type === 'primary') ? Config.colors.primary : Config.colors.white,
  borderColor: (props.type === 'primary') ? 'transparent' : Config.colors.primary,
  [Config.media.phone]: {
    padding: '0 10px'
  },
  [Config.media.screen]: {
    padding: '0 13px'
  }
})
)

export {Button}
