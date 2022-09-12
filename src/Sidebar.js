import React, {useState, useEffect} from 'react'
import './Sidebar.css'
import { Avatar,IconButton } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SearchOutlined } from '@mui/icons-material';
import SidebarChat from './SidebarChat';
import db from './firebase';
import { collection, onSnapshot } from "firebase/firestore";
import { useStateValue } from './StateProvider';

function Sidebar() {
const [rooms, setRooms] = useState([]);
const [{user}, dispatch] = useStateValue();

useEffect(() => {
    const unsubscribe = db
      .collection("Rooms")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setRooms(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    // const colRef = collection(db, "Rooms");
    // const unsubscribe = onSnapshot(
    //     collection(db, "Rooms"), 
    //     (snapshot) => {
    //         setRooms(snapshot.docs.map(doc=>({
    //             id: doc.id,
    //             data: doc.data()
    //         })
    //         ))
    //     },
    //     (error) => {
    //       console.log(error)
    //     });
      
     return ()=>{
         unsubscribe()
     }
}, []);

  return (
    <div className='sidebar'>
        <div className="sidebar__header">
            <Avatar src={user?.photoURL} />
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
           {rooms.map(room => (
               <SidebarChat key={room.id} id={room.id} name={room.data.name} />
           ))}
        </div>

    </div>
  )
}

export default Sidebar