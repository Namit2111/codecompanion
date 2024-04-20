import React from 'react'
import Sidebar from '../../layout/Sidebar'

const Presentation = () => {
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
      <div className="uploadvideo">
        <input type="text" className="preslink" placeholder ='Drag item here'></input>
        <input type = "button" className="repobuttn" value = "Upload Video"  ></input>
      </div>

      <div className="uploadvideo">
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

export default Presentation