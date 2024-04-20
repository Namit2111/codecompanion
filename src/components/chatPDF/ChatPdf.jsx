import React from 'react'
import Sidebar from '../../layout/Sidebar'

const ChatPdf = () => {
  return (
    <div>
    <div>
      <Sidebar/>
    </div>
    <div className="mpage gptt">
      <h1>Chat PDF</h1>
      <div className='chatpage'>
      <div className="chatus">
        <div className='drop-zone' id='drop-zone'>
          <div className='drop-zone-text'>
            <p>Drag & Drop PDF File Here</p>
            <p>or</p>
            <label htmlFor="file-input" className='btn'>Browse</label>
            <input type="file" id='file-input' accept='.pdf' />
          </div>
        </div>
        <div className='pdf-container' id='pdf-container'>

        </div>

      </div>
      <div className="chatus">
      </div>
      </div>
      </div>
  </div>

  )
}

export default ChatPdf