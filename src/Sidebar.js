import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@mui/material";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { SearchOutlined } from "@mui/icons-material";
import SidebarChat from "./SidebarChat";
import db from "./firebase";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  //eslint-disable-next-line
  const [{user}, dispatch ] = useStateValue();
  const [flag, setFlag] = useState(true)
  const [search, setSearch] = useState([])
  const [input, setInput] = useState('')

  const matcher = (searchVal, values) => {
    const regex = RegExp(`.*${searchVal.toLowerCase().split("").join(".*")}.*`);
    return values.filter((v) => v.data.name.toLowerCase().match(regex));
  };
  const handleChange = (e) => {
    setFlag(false);
    setInput(e.target.value);
  };

  useEffect(() => {
    if (rooms.length > 0) {
      setSearch(matcher(input, rooms));
    }
    if (input === "") {
      setFlag(true);
    }
    //eslint-disable-next-line
  }, [input]);


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

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="sidebar">
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
          <input placeholder="Search for chat room" type="text" onChange={handleChange} />
        </div>
      </div>
      {flag ? (
      <div className="sidebar__chats">
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
      ) : (
        <div className="sidebar__chats">
          <SidebarChat addNewChatVal='true'/>
          {search.map((room)=> (
            <SidebarChat key={room.id} id={room.id} name={room.data.name} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Sidebar;
