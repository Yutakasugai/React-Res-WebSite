import React from 'react';
import './App.css';
import Home from './pages/index';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignInPage from './pages/signin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/React-Res-WebSite/' component={Home} exact/>
        <Route path='/React-Res-WebSite/signin/' component={SignInPage} exact/>
      </Switch>
    </Router>
  );
}

export default App;
