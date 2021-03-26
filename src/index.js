import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { browserHistory } from './store/configuration';
import reportWebVitals from './reportWebVitals';
import Routes from './routes';
import store from './store';
import TitleBar from './components/bar/title';
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <TitleBar />
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
