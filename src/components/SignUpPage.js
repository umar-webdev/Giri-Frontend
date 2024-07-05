import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import forgotimg from '../img/SignUpPageimg.svg';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpPage = ({ onSignUp }) => {
  const navigate = useNavigate();
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for showing password


  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    gstNumber: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
    // Clear the error message when the user starts typing again
    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: '',
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!user.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!user.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!user.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (user.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    if (user.password !== user.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    if (!user.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
      isValid = false;
    }

    if (!user.gstNumber.trim()) {
      newErrors.gstNumber = 'GST number is required';
      isValid = false;
    }

    if (!agreeTerms) {
      newErrors.agreeTerms = 'Please agree to the terms and conditions';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };


  const handleSignUp = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();

      if (response.ok) {
        toast.success('Sign up successful');
        const { token } = data;
        localStorage.setItem('userToken', token);
        onSignUp(user.email);
     
        navigate('/');
      } else {
        toast.error(data.message || 'Sign up failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during sign up:', error);
      toast.error('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <Container style={{padding: '5%'}}>
      <Row className="justify-content-md-center align-items-center">
        <Col md={6}>
          <img src={forgotimg} alt="SignUpPageImage" className="img-fluid" />
        </Col>

        <Col md={6}>
          <h2 className="mt-5 mb-3">Sign Up</h2>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
              style={{ borderRadius:'0px'}}
                type="text"
                placeholder="Enter your name"
                name="name"
                value={user.name}
                onChange={handleInputChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
              style={{ borderRadius:'0px'}}
                type="text"
                placeholder="Enter your phone number"
                name="pnumber"
                value={user.pnumber}
                onChange={handleInputChange}
                isInvalid={!!errors.pnumber}
              />
              <Form.Control.Feedback type="invalid">{errors.pnumber}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
              style={{ borderRadius:'0px'}}
                type="email"
                placeholder="Enter email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
              style={{ borderRadius:'0px'}}
                type={showPassword ? 'text' : 'password'} // Show password conditionally
                placeholder="Enter password"
                name="password"
                value={user.password}
                onChange={handleInputChange}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicCPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
              style={{ borderRadius:'0px'}}
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleInputChange}
                isInvalid={!!errors.confirmPassword}
              />
              <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
            </Form.Group>

            {/* Show Password checkbox */}
            <Form.Group controlId="formShowPasswordCheckbox">
              <Form.Check
              style={{ borderRadius:'0px'}}
                type="checkbox"
                label="Show Password"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)} // Toggle show/hide password
              />
            </Form.Group>

            <Form.Group controlId="formCompanyName">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
              style={{ borderRadius:'0px'}}
                type="text"
                placeholder="Enter Company Name"
                name="companyName"
                value={user.companyName}
                onChange={handleInputChange}
                isInvalid={!!errors.companyName}
              />
              <Form.Control.Feedback type="invalid">{errors.companyName}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formgstno">
              <Form.Label>GST Number</Form.Label>
              <Form.Control
              style={{ borderRadius:'0px'}}
                type="text"
                placeholder="Enter your GST Number/Pan Card Number"
                name="gstNumber"
                value={user.gstNumber}
                onChange={handleInputChange}
                isInvalid={!!errors.gstNumber}
              />
              <Form.Control.Feedback type="invalid">{errors.gstNumber}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
              style={{ borderRadius:'0px'}}
                type="checkbox"
                label={<span>I agree to the <Link to="/terms_and_conditions">Terms and Conditions</Link></span>}
                checked={agreeTerms}
                onChange={() => setAgreeTerms(!agreeTerms)}
                isInvalid={!!errors.agreeTerms}
                feedback={errors.agreeTerms}
              />
            </Form.Group>

            <Button style={{ borderRadius:'0px'}} className="learn-more-button" type="button" onClick={handleSignUp}>
              Sign Up
            </Button>

            <Row className="mt-3">
              <Col>
                <p className="already-have-account-text">
                  Already have an account? <Link to="/signIn">Sign In</Link>
                </p>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    
    </Container>
  );
};

export default SignUpPage;