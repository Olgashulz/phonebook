import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store.js'
// import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={data.persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider >
  </React.StrictMode>,
  document.getElementById('root')
);


