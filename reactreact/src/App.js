import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

import Halaman1 from './Halaman1'
import Halaman2 from './Halaman2'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
          exact path = '/'
          component = {Halaman1}
          />
          <Route
          exact path = '/halaman2'
          component = {Halaman2}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
