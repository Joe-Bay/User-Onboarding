import React from 'react';
import './index.css';
import App from './App';
import { render } from '@testing-library/react';


render(
  <App />,
  document.querySelector('#root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

