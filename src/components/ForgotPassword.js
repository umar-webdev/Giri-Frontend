// ForgotPassword.js
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import forgotimg from '../img/Forgotpasswordimg.svg';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add the logic here to handle the forgot password request
    console.log(`Forgot Password requested for email: ${email}`);
    // Add your API call or other logic to handle the forgot password request
  };

  return (
    <Container>
      <Row className="justify-content-md-center align-items-center">

      <Col md={6}>
          {/* Add your image here */}
          <img
            src={forgotimg}
            alt="ForgotPasswordImage"
            className="img-fluid"
          />
        </Col>

        <Col md={6}>
          <h2 className="mt-5 mb-3">Forgot Password</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </Form.Group>

            <Button className='learn-more-button' variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <Row className="mt-3">
        <Col>
          <a href="/signin" className="forgot-password-link">
            Sign In
          </a>
        </Col>
        <Col className="text-right">
          <a href="/signup" className="create-account-link">
            Sign Up
          </a>
        </Col>
      </Row>
        </Col>

        
      
      </Row>
    </Container>
  );
};

export default ForgotPassword;
