import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles'
import './scripts'
import IndexView from './views/IndexView'
import ResultsView from './views/ResultsView'
import IndexController from './controllers/IndexController'
import ResultsController from './controllers/ResultsController'

ReactDOM.render(
   <BrowserRouter>
    <Switch>
      <Route exact path="/" component={IndexController} />
      <Route exact path="/results" component={ResultsController} />
    </Switch>
   </BrowserRouter>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
