import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/app/App';
import ContentTest from './views/contents/ContentTest'
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import PaimentMethod from './views/contents/ContentPaiementMethod/PaiementMethod';
import loginComponent from './components/login/loginComponent'

// must be deleted with : unregister();
// import * as serviceWorker from './serviceWorker';

const Root = () => {
  return(
    <Router>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route exact path='/bonus' component={ContentTest}/>
        <Route exact path='/payment-methods' component={PaimentMethod}/>
        <Route exact path='/login' component={loginComponent}/>
      </Switch>
    </Router>
  )
}

ReactDOM.render(
    <Root />,
  document.getElementById('root')
);

// serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
