import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyled from './globalStyle';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyled/>
  </React.StrictMode>,
  document.getElementById('root')
);
