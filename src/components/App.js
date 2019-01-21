import React, { Component } from 'react';
import Popular from './Popular';
import { Route, BrowserRouter as Router } from 'react-router-dom'
// const Router=ReactRouter.BrowserRouter;
// const Route=ReactRouter.Route;
import Nav from './Nav'
import Home from './Home'


class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
      <Nav></Nav>
        <Route exact path='/' component={Home}></Route>
        <Route path='/popular' component={Popular}/>

      </div>
      </Router>

    );
  }
}

export default App;
