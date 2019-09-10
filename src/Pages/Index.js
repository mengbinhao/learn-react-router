import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { uid: 111, text: 'aaaa' },
        { uid: 222, text: 'bbbb' },
        { uid: 333, text: 'cccc' }
      ]
    }
    this.props.history.push('/home/')
  }
  render() {
    return (
      <div>
        {/* <Redirect to="/home/" /> */}
        <h2>Index page</h2>
        <ul>
          {this.state.items.map((item, index) => {
            return (
              <li key={index}>
                <Link to={`/about/${item.uid}`}>{item.text}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Index
