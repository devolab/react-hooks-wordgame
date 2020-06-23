import React from 'react';
import PropTypes from 'prop-types';
import { CloseButton } from './';

import './ShowMessage.scss';

const ShowMessage = ({ message, handleClose, type }) => (
	<div className={`show-message show-message-${type}`}>
		{message}
		<CloseButton handleClose={handleClose} />
	</div>
);

ShowMessage.propTypes = {
	message: PropTypes.string,
	type: PropTypes.string
};

export default ShowMessage;
