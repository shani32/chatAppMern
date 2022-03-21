import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

function Sidebar() {
    const rooms=['Hi-Tech', 'Sport', 'Movies', 'Fun']
  return (
    <>
    <h2>Rooms</h2>
    <ListGroup>
        {rooms.map((room, idx)=>{
            <ListGroup.Item key={idx}>{room}</ListGroup.Item>
        })}
    </ListGroup>
    <h2>Contacts</h2>
    
    
    </>
  )
}

export default Sidebar