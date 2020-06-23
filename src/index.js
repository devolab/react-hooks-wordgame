import React from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import { Core } from './containers';
import * as serviceWorker from './serviceWorker';
import './styles/reset.scss';
import './styles/typography.scss';
import './styles/palette.scss';

ReactDOM.render(
	<Container>
		<Core />
	</Container>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
