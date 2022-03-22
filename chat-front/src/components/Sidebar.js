import React, { useContext } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { AppContext } from '../context/appContext';

function Sidebar() {
    const rooms=['Hi-Tech', 'Sport', 'Movies', 'Fun'];
    const user=useSelector((state)=> state.user);
    const {socket}= useContext(AppContext)
    socket.off('new-user').on('new-user', (payload)=>{
        console.log(payload)
    })
    if(!user){
        return <></>
    }
  return (
    <>
    <h2>Rooms</h2>
    <ListGroup>
        {rooms.map((room, idx)=>(
            <ListGroup.Item key={idx}>{room}</ListGroup.Item>
        ))}
    </ListGroup>
    <h2>Contacts</h2>
    
    
    </>
  )
}

export default Sidebar