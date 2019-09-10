import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './Pages/Index'
import About from './Pages/About'

function AppRouter() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">index</Link>
        </li>
        <li>
          <Link to="/about/">about</Link>
        </li>
      </ul>
      <Route path="/" exact component={Index}></Route>
      <Route path="/about/:id" exact component={About}></Route>
    </Router>
  )
}

export default AppRouter
