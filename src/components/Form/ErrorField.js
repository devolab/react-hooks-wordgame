import React from 'react';
import PropTypes from 'prop-types';

import './ErrorField.scss';

const ErrorField = ({ errorMessage }) => (
	<div className='error-field'>{errorMessage}</div>
);

ErrorField.propTypes = {
	errorMessage: PropTypes.string.isRequired
};

export default ErrorField;
