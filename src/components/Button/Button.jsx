import React from 'react';
import cn from 'classnames';
import './Button.scss';
import PropTypes from 'prop-types';

const Button = (props) => {
	const {
		children,
		color = "primary",
		component,
		disabled,
		endIcon,
		iconButton,
		onClick,
		size = "medium",
		startIcon,
		text,
		variant = "contained", 
		...attrs 
	} = props;

	const buttonClassNames = [ variant, color, size ];

	const buttonClass = cn(
		"button", 
		{ "icon-button": iconButton },
		{ [iconButton]: iconButton }, 
		buttonClassNames, 
		{ disabled: disabled && attrs.href }
	);
	const startIconClass = cn("icon-start", startIcon);
	const endIconClass = cn("icon-end", endIcon);

	const defineTag = () => {
		if (attrs.href) {
			return "a";
		}
		else if (component === "label") {
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
				{ (component === "label") ? children : null }
			</Tag>
		)
	}

	return render();
}

Button.propTypes = {
	children: PropTypes.node,
	color: PropTypes.string,
	component: PropTypes.string,
	disabled: PropTypes.bool, 
	endIcon: PropTypes.string,
	iconButton: PropTypes.string,
	onClick: PropTypes.func,
	size: PropTypes.string, 
	startIcon: PropTypes.string,
	text: PropTypes.string, 
	variant: PropTypes.string, 
}

export default Button;