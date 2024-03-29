import React, { Component } from 'react';
import Popular from './Popular';
import { Route,Switch, BrowserRouter as Router } from 'react-router-dom'
// const Router=ReactRouter.BrowserRouter;
// const Route=ReactRouter.Route;
import Nav from './Nav'
import Home from './Home'
import Battle from "./Battle"


class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
      <Nav></Nav>
        <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/popular' component={Popular}/>
        <Route path='/battle' component={Battle}/>

        </Switch>
      </div>
      </Router>

    );
  }
}

export default App;
