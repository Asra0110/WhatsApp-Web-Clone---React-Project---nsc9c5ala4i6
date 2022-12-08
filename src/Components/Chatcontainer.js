import { MoreVert } from '@mui/icons-material';
import React, { useState } from 'react';
import './Chatcontainer.css';
import ChatMessage from './ChatMessage';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import EmojiPicker from 'emoji-picker-react';


function Chatcontainer() {
    const [message, setMessage] = useState('');
    const [openEmojiBox, setOpenEmojiBox] = useState(false);


  return (
    <div className='chat-container'>
        <div className='chat-container-header'>
            <div className='chat-user-info'>
                <div className='chat-user-img'>
                    <img src="./person.png" alt="" />
                </div>
                <p>Asra Ansari</p>
            </div>
            <div className='chat-container-header-btn'>
                <MoreVert />
            </div>
        </div>
        <div className='chat-display-container'>
            <ChatMessage message="Hello Asra, how are u"  time="01-10-2022"/>
            <ChatMessage message="Hello Asra, how are u"  time="01-10-2022"/>
            <ChatMessage message="Hello Asra, how are u"  time="01-10-2022"/>
            <ChatMessage message="Hello Asra, how are u"  time="01-10-2022"/>
            <ChatMessage message="Hello Asra, how are u"  time="01-10-2022"/>
            <ChatMessage message="Hello Asra, how are u"  time="01-10-2022"/>
        </div>
        <div className='chat-input'>

            {openEmojiBox && <EmojiPicker 
            onEmojiClick={(event,emojiObject) => 
             setMessage(message+emojiObject.emoji)}/>}
    
            <div className='chat-input-btn'>
                <InsertEmoticonIcon onClick={ () => setOpenEmojiBox(!openEmojiBox)} />
                <AttachFileIcon/>
            </div>
            <form>
                <input type='text' placeholder='Type a Message'
                value ={message} onChange={(e) => {
                    setMessage(e.target.value)
                }} />
                <div className='chat-input-send-btn'>
                    <SendIcon />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Chatcontainer;