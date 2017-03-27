import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import FormContainerApp from './containers/form_container.jsx';

import utilitiesReducer from './reducers/untilities_reducer.js';

const store = createStore(utilitiesReducer);

const document = window.document || {}

let rootElement = document.getElementById('main-container')

ReactDOM.render(
    <Provider store={store}>
        <div>
            <FormContainerApp />
        </div>
    </Provider>,
    rootElement);
