import React, {useState} from 'react'
import './Sidebar.css'
import { Avatar,IconButton } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SearchOutlined } from '@mui/icons-material';
import SidebarChat from './SidebarChat';

function Sidebar() {
const [rooms, setRooms] = useState([]);

  return (
    <div className='sidebar'>
        <div className="sidebar__header">
            <Avatar />
            <div className="sidebar__headerRight">
            <IconButton>
                <DonutLargeIcon />
            </IconButton>
            <IconButton>
                <WhatsAppIcon />
            </IconButton>
            <IconButton>
                <MoreVertIcon />
            </IconButton>
            </div>
        </div>
        <div className="sidebar__search">
            <div className="sidebar__searchContainer">
            <SearchOutlined />
            <input placeholder = 'Search or start new chat' type='text' />
            </div>
        </div>
        <div className="sidebar__chats">
            <SidebarChat addNewChat/>
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
        </div>

    </div>
  )
}

export default Sidebar