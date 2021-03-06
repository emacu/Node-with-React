import 'materialize-css/dist/css/materialize.min.css'
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from "./components/App";
import axios from 'axios';

import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
window.axios = axios;
ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector("#root"));
