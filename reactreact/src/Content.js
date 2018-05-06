import React, { Component } from 'react'
import currencyFormatter from 'currency-formatter'

class Content extends Component {
  constructor(props) {
    super(props)
    this.state={
      items: []
    }
  }

  addItem() {
    const items = this.state.items
    items.push(1)
    this.setState({
      items: items
    })
  }

  render() {
    return (
      <div>
      <p onClick={()=> this.addItem()}>
      {currencyFormatter.format(this.props.kiriman, { code: 'IDR' })}
      </p>
      {this.state.items.map((item,index)=>
        <p>{item}</p>
      )}
      </div>
    )
  }
}

export default Content
