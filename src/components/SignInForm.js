import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../components/SignInForm.css';

const SignInForm = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSignIn = async () => {
    try {
      const response = await fetch('http://localhost:5000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();
      console.log("line no 36",data);

      if (response.ok) {
        const { token } = data;
        localStorage.setItem('userToken', token);
        onSignIn(email);
       alert('Sign in successful!');
        // Redirect user to dashboard or home page
        // history.push('/dashboard');
      } else {
        console.error('Sign in failed:', data.error);
        alert('Sign in failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during sign in:', error);
      alert('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleInputChange} style={{ borderRadius:'0px'}}/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" onChange={handleInputChange} style={{ borderRadius:'0px'}}/>
          <Form.Text className="text">
            <Button className="learn-more-button"  onClick={() => setShowPassword(!showPassword)} style={{ borderRadius:'0px'}}>
              {showPassword ? 'Hide' : 'Show'} Password
            </Button>
          </Form.Text>
        </Form.Group>

        <Button className="learn-more-button" style={{ borderRadius:'0px'}} type="button" onClick={handleSignIn}>
          Sign In
        </Button>

        <Row className="mt-3">
          <Col>
            {/* <a href="/forgotPassword" className="forgot-password-link">
              Forgot Password?
            </a> */}
          </Col>
          <Col className="text-right">
            <a href="/signup" className="create-account-link">
              Sign Up
            </a>
          </Col>
        </Row>
      </Form>
      
    </>
  );
};

export default SignInForm;
