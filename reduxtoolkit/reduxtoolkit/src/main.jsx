import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; 
import App from './App.jsx';
import './index.css';
import Store from "./store/index.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider Store={Store}>
    <App />
  </Provider>,
);
