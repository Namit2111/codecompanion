import React from 'react'
import Sidebar from '../../layout/Sidebar'

const Git = () => {
  return (
<div>
    <div>
      <Sidebar/>
    </div>
    <div className='mainPage'>
      <Sidebar/>
      <div className="presentation">
      <h1></h1>
    <div className='twoboxespres'>
      <div className="gitlink">
        <h2 className='linktxt'>Enter Github link here...</h2>
        <input type="text" className="githerelink" placeholder ='Copy here'></input>
        
      </div>

      <div className="gitchat">
        <h2>Name of the video</h2>
        <p>Desription of the video</p>
      </div>
      </div>
      <div className="pptdesc">
        <h2 className="aboutdata">Description</h2>
      </div>
      </div>
    </div>
  </div>
    
  )
}

export default Git