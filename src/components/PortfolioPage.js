import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioPage = () => (
  <div>
    <h2>My Work</h2>
    <p>Checkout the following things I have done:</p>
    <ul>
      <li>
        <Link to="/portfolio/1">Portfolio #1</Link>
      </li>
      <li>
        <Link to="/portfolio/2">Portfolio #2</Link>
      </li>
    </ul>
  </div>
)

export default PortfolioPage
