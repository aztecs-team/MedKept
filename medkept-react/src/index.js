import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { MoralisProvider } from 'react-moralis';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider serverUrl="https://yzfzc07ju6kr.usemoralis.com:2053/server" appId="yohMP8fh7GApV4KQ4cGRYWTTtpycmiLSX1d6wjO7">
    <Provider store={store}>
      <App />
    </Provider>
      </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
