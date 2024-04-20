import React from 'react'
import Sidebar from '../../layout/Sidebar'
import "../../assessts/main.css"
const MainPage = () => {
  return (
    <div className='mainPage'>
      <Sidebar/>
      <div className="mpage">
      <h1>CODE COMPANION</h1>
      <div className="aboutus">
        <h2>About Us</h2>
      </div>
      </div>
    </div>
  )
}

export default MainPage