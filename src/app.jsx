import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Main } from './containers/';
import './style.css';
import 'semantic-ui-css/semantic.min.css';


ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
);


