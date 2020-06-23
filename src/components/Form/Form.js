import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ handleFormSubmit, children }) => {
	return <form onSubmit={handleFormSubmit}>{children}</form>;
};

Form.defaultProps = {
	type: 'form'
};

Form.propTypes = {
	handleFormSubmit: PropTypes.func,
	children: PropTypes.node
};

export default Form;
