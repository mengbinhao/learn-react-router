import React, { Component } from 'react'

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <h2>about page</h2>
        <div>{this.state.id}</div>
      </div>
    )
  }
  componentDidMount() {
    console.log(this.props.match)
    this.setState({
      id: this.props.match.params.id
    })
  }
}

export default About
