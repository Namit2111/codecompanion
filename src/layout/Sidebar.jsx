import React from 'react'
import { Link } from 'react-router-dom'
import "../assessts/sidebar.css"
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="blockname">
        <ul>
            <li>
              <Link to= "/"> Home</Link>
              </li>
            <li>
              <Link to="/pdf" >  
              Chat PDF
              </Link>
              </li>

            <li>
              <Link to = "/graph">
              Graph
              </Link>
              </li>

            <li>
              <Link to="/video">
              Presentation
              </Link>
              </li>
            <li>
              <Link to="/git" >
              Documentation
              </Link>
              </li>
        </ul>
        </div>
    </div>
  )
}

export default Sidebar