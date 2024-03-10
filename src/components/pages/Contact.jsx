import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { validateEmail } from '../../utils/helpers';
import emailjs from '@emailjs/browser';

function Contact() {
  const [valid, setValid] = useState({ name: false, email: false, message: false });
  const { name, email, message } = valid;
  const [alert, setAlert] = useState(null);
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email && message) {
      // Your email sending logic
    } else {
      setAlert('failure');
    }
  };

  const handleChange = (e) => {
    const targetIsEmail = (e.target.id === 'email') ? true : false;
    if (e.target.value.length) {
      targetIsEmail ? setValid({ ...valid, email: validateEmail(e.target.value) }) : setValid({ ...valid, [e.target.id]: true });
    } else {
      setValid({ ...valid, [e.target.id]: false });
    }
  };

  return (
    <Container>
      <Row className='contact justify-content-center'>
        <Col sm={12} md={6} lg={4}>
          <Form id='form' ref={form} className='text-dark' onSubmit={handleSubmit}>
            <Form.Group onChange={handleChange} className="contact-input mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control required isInvalid={!name} name='name' placeholder="Enter your name here" style={{ width: '100%', minWidth: '300px' }} />
            </Form.Group>
            <Form.Group onChange={handleChange} className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control required isInvalid={!email} name='email' placeholder="Enter your email here" style={{ width: '100%', minWidth: '300px' }} />
            </Form.Group>
            <Form.Group onChange={handleChange} className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={6} required isInvalid={!message} name='message' placeholder="Type your message here" style={{ width: '100%', minWidth: '300px' }} />
            </Form.Group>
            <Button className='text-light' type="submit">Submit</Button>
          </Form>
          {alert === 'success' && (
            <Alert className='my-3' variant='success'>
              Message sent. Thanks for reaching out!
            </Alert>
          )}
          {alert === 'failure' && (
            <Alert className='my-3' variant='danger'>
              Message not sent, email provided is invalid!
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;