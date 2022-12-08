import React from 'react'
import Chatcontainer from './Chatcontainer'
import Sidebar from './Sidebar'
import './ChatPage.css';

function ChatPage() {
  return (
    <div className='chatpage'>

      <div className='chatpage-container'>
      {/* sidebar */}
      <Sidebar />

      {/*chatcontainer */}
      <Chatcontainer />
      </div>
    </div>
  )
}

export default ChatPage
