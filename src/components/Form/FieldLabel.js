import React from 'react';
import PropTypes from 'prop-types';

import './Form.scss';

const FieldLabel = ({ name, label }) => (
	<label className='form__field-label' htmlFor={name}>
		{label}
	</label>
);

FieldLabel.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
};

export default FieldLabel;
