import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Content from './Content'

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
        <Content kiriman={100000000000000000}/>
      </div>
    )
  }
}

export default Halaman1
