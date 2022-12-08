import React from 'react'
import Sidebar from './Sidebar';
import './Home.css';

function Home() {
  return (
    <div className='home'>
     <div className='home-container'>
        <Sidebar/>
        <div className='home-bg'>
          <img src="./whatsAppBg.png" alt="" />
        </div>
        
        </div> 
    </div>
  )
}

export default Home;