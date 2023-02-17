import './index.css';
import App from './pages/App/App';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import store from './store';
import { Provider } from 'react-redux';
import 'react-tooltip/dist/react-tooltip.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// ! FIX: Could not resolve dependency: peer react@"^16.13.1"
//        from react-usa-map@1.5.0 node_modules/react-usa-ma
//        react-usa-map@"^1.5.0" from the root project
// ! FIX: Conflicting peer dependency: react@16.14.0 node_modules/react
//        peer react@"^16.13.1" from react-usa-map@1.5.0 node_modules/react-usa-map
//        react-usa-map@"^1.5.0" from the root project

// Fix the upstream dependency conflict, or retry this command with --force, or --legacy-peer-deps
// to accept an incorrect (and potentially broken) dependency resolution.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
