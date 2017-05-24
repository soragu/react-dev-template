import { createStore } from 'redux';
import { Provider } from 'react-redux';
import searchPageReducer from 'Reducers/SearchPage';
import initState from './data';
import SearchPage from 'Containers/SearchPage';

const store = createStore(
    searchPageReducer, 
    initState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

const document = window.document || {};

const rootElement = document.getElementById('main-container');

ReactDOM.render(
    <Provider store={store}>
        <SearchPage />
    </Provider>,
    rootElement);

