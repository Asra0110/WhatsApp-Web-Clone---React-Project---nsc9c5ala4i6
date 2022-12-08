import React from 'react';
import TollIcon from '@mui/icons-material/Toll';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import './Sidebar.css';
import UserProfile from './UserProfile';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-header'>
        <div className='sidebar-header-img'>
            <img src='./person.png' alt='' />
        </div>
        <div className='sidebar-header-btn'>
            <TollIcon/>
            <InsertCommentIcon />
            <MoreVertIcon/>
        </div>
      </div>
        <div className='sidebar-search'>
            <div className='sidebar-search-input'>
                <SearchIcon />
                <input type='text' name='search'
                placeholder='Search...'/>
            </div>
        </div>
        <div className='sidebar-chat-list'>
            <UserProfile name='Asra Ansari' photoURL='./person.png' />
            <UserProfile name='D E E P A K S I N G H' photoURL='./person.png' />
            <UserProfile name='Laxmi Bhanuja' photoURL='./person.png' />
            <UserProfile name='Rajesh Chaudhary' photoURL='./person.png' />
            <UserProfile name='Yuvraj' photoURL='./person.png' />
            <UserProfile name='Rupesh Pandey' photoURL='./person.png' />
            <UserProfile name='Abhijit' photoURL='./person.png' />
            <UserProfile name='Yash' photoURL='./person.png' />
        </div>
    </div>
  )
}

export default Sidebar;
