import React from 'react';
import PropTypes from 'prop-types';
import ShortTextIcon from '@material-ui/icons/ShortText';

import './Form.scss';

const FieldText = ({ name, placeholder }) => {
	return (
		<React.Fragment>
			<div className='form__container'>
				<ShortTextIcon className='form-icon' />
				<input id={name} name={name} type='text' placeholder={placeholder} className='form__field' />
			</div>
		</React.Fragment>
	);
};

FieldText.defaultProps = {
	type: 'text'
};

FieldText.propTypes = {
	onChange: PropTypes.func,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired
};

export default FieldText;
