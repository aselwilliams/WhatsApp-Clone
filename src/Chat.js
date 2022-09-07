import { AttachFile, InsertEmoticon, SearchOutlined} from '@mui/icons-material';
import MoreVert from '@mui/icons-material/MoreVert';
import MicIcon from '@mui/icons-material/Mic';
import { Avatar,IconButton } from '@mui/material';
import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import './Chat.css';
import db from './firebase';
import {collection, doc, onSnapshot} from 'firebase/firestore';

function Chat() {
    const [seed, setSeed] =useState('');
    const [input, setInput] = useState('');
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState('');

    useEffect(()=> {
        if(roomId) {
            onSnapshot(doc(db, 'Rooms', roomId), (doc)=> (
                setRoomName(doc.data().name)
            ))
        }
    }, [roomId])

    useEffect(()=> {
        setSeed(Math.floor(Math.random * 5000))
    }, [])

    const sendMessage=(e)=>{
        e.preventDefault()
        console.log('You typed a msg')

        setInput('')
    }
  return (
    <div className='chat'>
        <div className="chat__header">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="chat__headerInfo">
                <h3>{roomName}</h3>
                <p>Last seen at ...</p>
            </div>
            <div className="chat__headerRight">
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                    <AttachFile />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>
        </div>
        <div className="chat__body">
            <p className={`chat__message ${true && 'chat__receiver'}`}>
            <span className='chat__name'>
                Asel Williams
            </span>
            Hey Guys
            <span className="chat__timestamp">
                12:57am
            </span>
            </p>
        </div>
        <div className="chat__footer">
            <InsertEmoticon />
            <form>
                <input type='text' placeholder='Send a message' onChange={(e)=>setInput(e.target.value)}/>
                <button type='submit' onClick={sendMessage}>Send a message</button>
            </form>
            <MicIcon />
        </div>
    </div>
  )
}

export default Chat
