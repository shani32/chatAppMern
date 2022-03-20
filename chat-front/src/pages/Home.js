import React from 'react';
import {Row, Button, Col} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import './Home.css'

function Home() {
  return (
    <Row>
      <Col md={6} className="d-flex flex-direction-column align-items-center justify-content-center">
        <div>
          <h1>Sharing things no concern</h1>
          <p>Chat App that allows you connections</p>
          <LinkContainer to='/chat'>
           <Button variant='success'>Get started<i className='fas fa-comments home-message-icon'></i></Button>
           
          </LinkContainer>
        </div>
      </Col>
     <Col md={6} className="home_bg">
     </Col>
    </Row>
  )
}

export default Home