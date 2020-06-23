import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';

import './CloseButton.scss';

const CloseButton = ({ handleClose }) => (
	<div className='button-close' onClick={handleClose}>
		<CloseIcon />
	</div>
);

CloseButton.propTypes = {
	handleClose: PropTypes.func
};

export default CloseButton;
