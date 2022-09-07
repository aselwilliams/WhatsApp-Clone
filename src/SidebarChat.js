import db from './firebase';
import { Avatar } from '@mui/material';
import React,{useEffect, useState} from 'react';
import './SidebarChat.css';
import {collection, addDoc} from 'firebase/firestore';

function SidebarChat({ id, name, addNewChat}) {
    const [seed, setSeed] = useState('')

    useEffect(()=> {
        setSeed(Math.floor(Math.random()*5000))
    }, [])

    const createChat = async ()=> {
        const roomName= prompt('Please enter name for chat');

        if(roomName) {
            //do some DB stuff
            const docRef = await addDoc(collection(db, "Rooms"), {
                name: roomName,
              });
              console.log(docRef.id)
        }
    }

  return !addNewChat ? (
    <div className='sidebarChat'>
       <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
       <div className="sidebarChat__info">
           <h2>{name}</h2>
           <p>Last message...</p>
       </div>

    </div>
  ) : (
      <div onClick={createChat} className='sidebarChat' >
          <h2>Add New Chat</h2>
      </div>
  )
}

export default SidebarChat;