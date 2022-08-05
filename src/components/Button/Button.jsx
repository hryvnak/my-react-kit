import cn from 'classnames';
import './Button.scss';
import { has } from 'lodash';

const Button = (props) => {
	const { 
		children,
		variant = "contained", 
		color = "primary", 
		size = "medium", 
		text, 
		onClick,
		startIcon,
		endIcon,
		...atributs 
	} = props;

	const classeNames = [ variant, color, size ];

	let buttonClass = cn("button", classeNames);

	if (has(atributs, 'href')) {
		return (
		<a onClick={ onClick } className={ buttonClass } { ...atributs }>
			{ text }
		</a>
		)
	}
	else if (has(atributs, 'component')) {
		if (atributs.component === "label") {
			return (
				<label onClick={ onClick } className={ buttonClass } { ...atributs }>
					{ text }
					{ children }
				</label>
			)
		}
	}
	else if (startIcon) {
		return (
			<button onClick={ onClick } className={ buttonClass} { ...atributs }>
				<span className={ cn("icon", "start", startIcon) }></span>
				{ text }
			</button>
		)
	}
	else if (endIcon) {
		return (
			<button onClick={ onClick } className={ buttonClass} { ...atributs }>
				{ text }
				<span className={ cn("icon", "end", endIcon) }></span>
			</button>
		)
	}
	else {
		return (
		<button onClick={ onClick } className={ buttonClass } { ...atributs }>
			{ text }
		</button>
		)  
	}
}
export default Button;