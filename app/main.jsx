import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello.jsx';
import World from './world.jsx';

ReactDOM.render(
	<div>
		<Hello name="programmer"/>
		<World />
	</div>,
	document.getElementById('main-container'));
