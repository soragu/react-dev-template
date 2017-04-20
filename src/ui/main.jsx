import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore();

const document = window.document || {}

let rootElement = document.getElementById('main-container')

ReactDOM.render(
    <Provider store={store}>
        
    </Provider>,
    rootElement);
