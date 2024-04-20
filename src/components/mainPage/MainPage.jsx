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
        <h2 className="aboutdata">About Us</h2>
        <ul className='features'>
          <li className='featurelist'>Simplifying complexity: Decoding complexity through summaries.</li>
          <li className='featurelist'>Personal Guide: Your very own guide to technical understanding.</li>
          <li className='featurelist'>Bride the Gap: Simplifying learning with comprehensive summaries.</li>
          <li className='featurelist'>Enhance Understanding: Clear your doubts with capable chatbot.</li>
        </ul>
      </div>

      <div className="gittalk">
        <h2 className="aboutdata">Github Talk</h2>
        <input type="text" className="repolink" placeholder ='Copy Here'></input>
        <input type = "button" className="repobuttn" value = "Get Repo"  ></input>
      </div>
    <div className='twoboxes'>
      <div className="chatpdff">
        <h2 className="aboutdata">Chat with PDF</h2>
        <input type="text" className="repolink" placeholder ='Upload file'></input>
        <input type = "button" className="repobuttn" value = "Ask a question"  ></input>
      </div>

      <div className="chatpdff">
        <input type="text" className="videoo"></input>
        <input type = "button" className="repobuttn" value = "Get Repo"  ></input>
      </div>
      </div>
      </div>
    </div>
  )

}

export default MainPage