import db from './firebase';
import { Avatar } from '@mui/material';
import React,{useEffect, useState} from 'react';
import './SidebarChat.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { password } from "./constants";
import {Link} from 'react-router-dom';
import firebase from "firebase";

function SidebarChat({ id, name, addNewChat}) {
    const [seed, setSeed] = useState('')
    const [messages, setMessages] = useState("")

    useEffect(()=>{
        if(id) {
            db.collection('Rooms').doc(id).collection('messages').orderBy('timestamp', 'desc').onSnapshot((snapshot)=>
                setMessages(snapshot.docs.map((doc)=>doc.data()))
            )
        }
    }, [id])

    useEffect(()=> {
        setSeed(Math.floor(Math.random()*5000))
    }, [])

    const createChat = async ()=> {
        const roomName= prompt('Please enter name for chat');

        if(roomName) {
            db.collection("Rooms").add({
                name: roomName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              });
            // const docRef = await addDoc(collection(db, "Rooms"), {
            //     name: roomName,
            //   });
            //   console.log(docRef.id)
        }
    }

    const deleteRoom = () => {
        const passwordVerify = prompt("Enter Admin Password to delete Room");
        if (passwordVerify == password) {
          db.collection("Rooms")
            .doc(id)
            .delete()
            .then(function () {
              window.location = "/";
            })
            .catch(function (error) {
              console.error("Error removing document: ", error);
            });
        } else {
          alert("You are not authorised to delete rooms");
        }
      };

  return !addNewChat ? (
      <Link to={`/rooms/${id}`}>
    <div className='sidebarChat'>
       <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
       <div className="sidebarChat__info">
           <h2>{name}</h2>
           <p>{messages[0]?.message || 'Last message...'}</p>
       </div>

       <div className="sidebarChat__delete" onClick={deleteRoom}>
        <DeleteOutlineIcon />
      </div>
    </div>
    </Link>
  ) : (
      <div onClick={createChat} className='sidebarChat' >
          <h2>Add New Chat</h2>
      </div>
  )
}

export default SidebarChat;