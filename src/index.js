import React from 'react';
// import ReactDOM from 'react-dom'; The new way to import createRoot:
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './containers/App';
import 'tachyons';

import store from './app/store'
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <App/>
  </Provider>);
