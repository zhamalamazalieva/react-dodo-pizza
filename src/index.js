import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
      <App />
=======
      <Provider>
      <App />
      </Provider>
>>>>>>> f4cd16bd651111c01cc312e1d2790978db2f88f7
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
