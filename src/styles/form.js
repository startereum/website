import glamorous from 'glamorous';
import {Config} from './variables';

const Button = glamorous.a({
  fontWeight: 500,
  textDecoration: 'none',
  lineHeight: '30px',
  margin: '10px',
  display: 'inline-block',
  padding: '0 13px',
  fontSize: '1rem',
  curpor: 'pointer',
  border: 'thin solid transparent',
  borderRadius: Config.borderRadius.xs
},
(props) => {
  return {
    color: (props.type === 'primary') ? Config.colors.white : Config.colors.primary,
    background: (props.type === 'primary') ? Config.colors.primary : Config.colors.white,
    borderColor: (props.type === 'primary') ? 'transparent' : Config.colors.primary
  };
}
);

export {Button};
