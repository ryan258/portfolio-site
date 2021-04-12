import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioNode = (props) => {
  console.log(props)
  return (
    <div>
      <h2>Single portfolio page!</h2>
      <p>beep this was portfolio page number {props.match.params.id}</p>
      <p>
        Back to <Link to="/portfolio">portfolio</Link> page
      </p>
    </div>
  )
}

export default PortfolioNode
