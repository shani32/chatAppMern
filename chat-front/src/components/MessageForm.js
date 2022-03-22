import React from 'react'
import { Form, Row, Col, FormGroup, FormControl, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './MessageForm.css'

function MessageForm() {
    function handleSubmit(e){
        e.preventDefault();

    }
    const user=useSelector((state)=> state.user)
  return (
    <>
        <div className='message-output'>{!user && <div className='alert alert-danger'>Please login</div>}</div>
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col md={11}>
                    <FormGroup>
                        <FormControl type='text' placeholder='your message' disabled={!user}></FormControl>
                    </FormGroup>
                </Col>
                <Col md={1}>
                    <Button variant='primary' type='submit' style={{width:100, backgroundColor: "blue"}} disabled={!user}>
                        <i className='fas fa-paper-plane'></i>

                    </Button>
                    
                </Col>
            </Row>
        </Form>
    </>
  )
}

export default MessageForm