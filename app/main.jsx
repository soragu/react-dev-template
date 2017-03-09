import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Hello from 'Components/hello';
import World from 'Components/world';
import Photo from 'Components/photo';

import FormContainerApp from './containers/form_container.jsx';

import utilitiesReducer from './reducers/untilities_reducer.js';

import image from 'Images/ct.jpg';

const store = createStore(utilitiesReducer);

const document = window.document || {}

let rootElement = document.getElementById('main-container')

ReactDOM.render(
	<Provider store={store}>
		<div>
			<Hello name="programmer HHHH222"/>
			<World />
			<Photo imageUrl={image}/>
			<FormContainerApp />
		</div>
	</Provider>,
	rootElement);
