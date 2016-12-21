import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Button from './Button'

ReactDOM.render(
  <App cat={42} txt="top prop text" />,
  document.getElementById('root')
);

ReactDOM.render(
  <Button />,
  document.getElementById('button')
);
