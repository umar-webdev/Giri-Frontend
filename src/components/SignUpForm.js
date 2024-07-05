// SignUpForm.js
import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import '../components/SignUpForm.css';

const SignUpForm = ({ onSignUp }) => {
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleCheckboxChange = () => {
    setAgreeTerms(!agreeTerms);
  };

  return (
    <Form>
      <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control style={{ borderRadius:'0px'}} type="text" placeholder="Enter your name" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control style={{ borderRadius:'0px'}} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control style={{ borderRadius:'0px'}} type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
      <Form.Check
      style={{ borderRadius:'0px'}}
          type="checkbox"
          label={<span>I agree to the <a href="/t_c">Terms and Conditions</a></span>}
          checked={agreeTerms}
          onChange={handleCheckboxChange}
        />
      </Form.Group>

      <Button style={{ borderRadius:'0px'}} className='learn-more-button' type="button" onClick={onSignUp}>
        Sign Up
      </Button>

      <Row className="mt-3">
        <Col>
          <p className="already-have-account-text">
            Already have an account? <a href="/signIn">Sign In</a>
          </p>
        </Col>
      </Row>
    </Form>
  );
};

export default SignUpForm;
