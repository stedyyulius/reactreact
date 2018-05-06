import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Halaman1 extends Component {
  constructor(props) {
    super(props)
    this.state={
      showTitle: 'stedy'
    }
  }

  tindakan1() {
    this.setState({
      showTitle: false
    })
  }

  title() {
    if (this.state.showTitle === 'stedy') {
      return <Link to="/halaman2"><h1 className="App-title">Welcome to React</h1></Link>
    } else {
      return null
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
          src='https://www.seriouseats.com/recipes/images/2015/05/Anova-Steak-Guide-Sous-Vide-Photos15-beauty-1500x1125.jpg'
          className="App-logo"
          alt="logo"
          onClick={() => this.tindakan1()}
          />
          {this.title()}
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default Halaman1
