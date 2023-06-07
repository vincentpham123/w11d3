import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter,Route,Redirect} from 'react-router-dom';
const Root = () => {
  return(
    <BrowserRouter>
      <Route path="/">
          <App />
      </Route>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
      <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
