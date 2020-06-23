import React from 'react';
import PropTypes from 'prop-types';
import { CONTENT, BUTTONS, MESSAGES } from '../../constants';
import Grid from '@material-ui/core/Grid';
import { Logo, Form, FieldText, FieldLabel, Button, ShowMessage } from '../../components';

import './Core.scss';

const words = [
	'contained',
	'dangerous',
	'establish',
	'knowledge',
	'potential',
	'resulting',
	'automated',
	'buzzwords',
	'pizzalike',
	'paparazzi',
	'maximized'
];

const selectedWord = words[Math.floor(Math.random() * words.length)];

const Core = () => {
	/**
	 * Randomize words
	 */
	const shuffle = selectedWord
		.split('')
		.sort(function() {
			return 0.5 - Math.random();
		})
		.join('');

	const [ word ] = React.useState(shuffle);

	/**
	 * Handling Success/Fail message
	 */
	const [ showMessage, setShowMessage ] = React.useState({
		success: false,
		fail: false
	});

	/**
	 * handle Answer
	 * @param {*} e
	 */

	const handleFormSubmit = e => {
		e.preventDefault();
		e.persist();

		const answer = e.target[0].value;

		if (answer === selectedWord) {
			setShowMessage({ success: true });
		}
		else {
			setShowMessage({ fail: true });
		}
	};

	const handleReset = () => {
		window.location.reload(true);
	};

	/**
	 * Handle Message Close Button
	 */
	const handleClose = () => {
		setShowMessage({
			success: false,
			fail: false
		});
	};

	return (
		<Grid container direction='column' alignItems='center'>
			<figure className='core-logo'>
				<Logo />
			</figure>

			<Grid item sm={6} xs={12}>
				<div className='core-word'>
					<h1>{word}</h1>
				</div>

				<Form handleFormSubmit={handleFormSubmit}>
					<FieldLabel name={CONTENT.NAME.ANSWER} label={CONTENT.LABEL.ANSWER} />
					<FieldText name={CONTENT.NAME.ANSWER} placeholder={CONTENT.PLACEHOLDER.ANSWER} required={true} />

					<Button type='submit' buttonStyle='btn--secondary--solid' buttonSize='btn--infinite'>
						{BUTTONS.SUBMIT}
					</Button>
				</Form>

				<Button type='button' buttonStyle='btn--secondary--solid' buttonSize='btn--infinite' onClick={handleReset}>
					RESET
				</Button>

				{showMessage.success && <ShowMessage message={MESSAGES.SUCCESS} handleClose={handleClose} type='success' />}
				{showMessage.fail && <ShowMessage message={MESSAGES.FAIL} handleClose={handleClose} type='fail' />}
			</Grid>
		</Grid>
	);
};

Core.propTypes = {
	children: PropTypes.node
};

export default Core;
