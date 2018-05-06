import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
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
        <div>
          <Route
          exact path = '/'
          component = {Halaman1}
          />
          <Route
          exact path = '/halaman2'
          component = {Halaman2}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
