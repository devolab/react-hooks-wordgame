import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const STYLES = [
	'btn--primary--solid',
	'btn--primary--outlined',
	'btn--secondary--solid',
	'btn--secondary--outlined'
];

const SIZES = [ 'btn--medium', 'btn--large', 'btn--infinite' ];

const Button = ({
	children,
	type,
	onClick,
	buttonStyle,
	buttonSize,
	disabled
}) => {
	const checkButtonStyle = STYLES.includes(buttonStyle)
		? disabled ? 'btn--disabled' : buttonStyle
		: STYLES[0];

	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

	return (
		<button
			className={`btn ${checkButtonStyle} ${checkButtonSize}`}
			onClick={onClick}
			type={type}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

Button.defaultProps = {
	type: 'button'
};

Button.propTypes = {
	onClick: PropTypes.func,
	type: PropTypes.string.isRequired,
	disabled: PropTypes.bool
};

export default Button;
