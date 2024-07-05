import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import forgotimg from '../img/SignInPageimg.svg';

import { useNavigate } from 'react-router-dom';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignInPage = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for showing password



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

      if (response.ok) {
        const { token } = data;
        localStorage.setItem('userToken', token);
        onSignIn(email);
        alert('Sign in successful!');
        // nav
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
    <Container style={{padding: '1.5rem'}}>
      <Row className="justify-content-md-center align-items-center">
        <Col md={6}>
          <img src={forgotimg} alt="SignInPageImage" className="img-fluid" />
        </Col>

        <Col md={6}>
          <h2 className="mt-5 mb-3">Sign In</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
              style={{ borderRadius:'0px'}}
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
              style={{ borderRadius:'0px'}}
                type={showPassword ? 'text' : 'password'} // Show password conditionally
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
              <Form.Text className="text-muted">
                <Form.Check
                style={{ borderRadius:'0px'}}
                  type="checkbox"
                  label="Show Password"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)} // Toggle show/hide password
                />
              </Form.Text>
            </Form.Group>

            <Button style={{ borderRadius:'0px'}} className="learn-more-button" type="button" onClick={handleSignIn}>
              Sign In
            </Button>

            <Row className="mt-3">
              <Col>
                {/* <Link to="/forgotPassword" className="forgot-password-link">
                  Forgot Password?
                </Link> */}
              </Col>
              <Col className="text-left">
              <p className="already-have-account-text">
                  Do not have an account? <Link to="/signup">Sign Up</Link>
                </p>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default SignInPage;
