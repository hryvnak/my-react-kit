import cn from 'classnames';
import { upperFirst } from 'lodash';

const Button = (props) => {
  const { 
    variant = "contained", 
    color = "basic", 
    size = "normal", 
    buttonText, 
    onClick, 
    ...atributs 
  } = props;

  const classeNames = [ variant, color, size ];
  const normalizedClassNames = classeNames.map(upperFirst);
  const buttonClass = cn(normalizedClassNames);

  return (
    <button 
      onClick={ onClick } 
      className={ buttonClass } 
      { ...atributs }>
      { buttonText }
    </button>
  )
}
export default Button;