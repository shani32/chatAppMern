import React from 'react'
import { Form, Row, Col, FormGroup, FormControl, Button } from 'react-bootstrap';
import './MessageForm.css'

function MessageForm() {
    function handleSubmit(e){
        e.preventDefault();

    }
  return (
    <div >
        <div className='message-output'></div>
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col md={11}>
                    <FormGroup>
                        <FormControl type='text' placeholder='your message'></FormControl>
                    </FormGroup>
                </Col>
                <Col md={1}>
                    <Button variant='primary' type='submit' style={{width:100, backgroundColor: "blue"}}>
                        <i className='fas fa-paper-plane'></i>

                    </Button>
                    
                </Col>
            </Row>
        </Form>
    </div>
  )
}

export default MessageForm