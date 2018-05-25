import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { valueReducer } from './redux/reducers';
import { updateValueTo10 } from './redux/actions';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

const store = createStore(valueReducer);
store.dispatch(updateValueTo10());
