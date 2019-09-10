import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './Pages/Index'
import About from './Pages/About'
import Home from './Pages/Home'

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
      <Route path="/about/:id" component={About}></Route>
      <Route path="/home/" component={Home}></Route>
    </Router>
  )
}

export default AppRouter
