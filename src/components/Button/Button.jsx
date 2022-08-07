import React from 'react';
import cn from 'classnames';
import './Button.scss';
import PropTypes from 'prop-types';

const Button = (props) => {
	const { 
		children,
		variant = "contained", 
		color = "primary", 
		size = "medium", 
		text, 
		onClick,
		iconButton,
		startIcon,
		endIcon,
		disabled, 
		active,
		...attrs 
	} = props;

	const buttonClassNames = [ variant, color, size ];

	const buttonClass = cn(
		"button", 
		{ "icon-button": iconButton },
		{ [iconButton]: iconButton }, 
		buttonClassNames, 
		{ active: active }, 
		{ disabled: disabled && attrs.href }
	);
	const startIconClass = cn("icon-start", startIcon);
	const endIconClass = cn("icon-end", endIcon);

	const defineTag = () => {
		if (attrs.href) {
			return "a";
		}
		else if (attrs.component === "label") {
			return "label";
		}
		return "button";
	}
	
	const render = () => {
		const Tag = defineTag();
		return (
			<Tag 
				{ ...attrs} 
				onClick={ onClick } 
				className={ buttonClass } 
				disabled={ disabled } 
				tabIndex={ (attrs.href && disabled) ? -1 : null }
			>
				{ startIcon ? (<span className={ startIconClass }></span>) : null }
				{ text }
				{ endIcon ? (<span className={ endIconClass }></span>) : null }
				{ (attrs.component === "label") ? children : null }
			</Tag>
		)
	}

	return render();
}

Button.propTypes = {
	children: PropTypes.node,
	variant: PropTypes.string, 
	color: PropTypes.string, 
	size: PropTypes.string, 
	text: PropTypes.string, 
	onClick: PropTypes.func,
	startIcon: PropTypes.string,
	endIcon: PropTypes.string,
	disabled: PropTypes.bool, 
	active: PropTypes.bool, 
}

export default Button;