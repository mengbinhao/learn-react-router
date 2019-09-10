import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Index() {
  return <h2>Index page</h2>
}

function About() {
  return <h2>about page</h2>
}

function AppRouter() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">index</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
      <Route path="/" exact component={Index}></Route>
      <Route path="/about" exact component={About}></Route>
    </Router>
  )
}

export default AppRouter
