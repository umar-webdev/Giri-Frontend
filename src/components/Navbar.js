import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown, Modal, Alert } from 'react-bootstrap';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import Logo from './logo.png';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useQuote } from './QuoteContext';  // Import the useQuote hook

const CustomNavbar = ({  isLoggedIn, isSignedUp, userEmail, userName, onSignIn, onSignOut, onSignUp  }) => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showAlert, setShowAlert] = useState(false); // State for showing the alert
  const [alertMessage, setAlertMessage] = useState(''); // State for the alert message
  const [initialLoad, setInitialLoad] = useState(true); // State to track initial page load
  const [collapsed, setCollapsed] = useState(true); // State to manage Navbar collapse

 
  useEffect(() => {
    // Check if the user is not logged in and it's the initial page load, then show the SignIn modal
    if (!isLoggedIn && initialLoad) {
      setShowSignIn(true);
      setInitialLoad(false); // Set initialLoad to false after showing the modal
    }
  }, [isLoggedIn, initialLoad]); // Trigger effect when isLoggedIn or initialLoad changes




  // useEffect(() => {
    // Check if the user is not logged in and show the SignIn modal accordingly
  //   if (!isLoggedIn) {
  //     setShowSignIn(true);
  //   }
  // }, [isLoggedIn]); // Trigger effect when isLoggedIn changes

  const handleSignIn = (email) => {
    setShowSignIn(false);
    onSignIn(email); // Trigger the sign-in action (you may adjust this based on your application logic)
  };

const handleSignUp = (email) => {
  setShowSignUp(false);
  onSignUp(email); // Pass the email to onSignUp
};

const handleSignOut= ()=> {
  localStorage.removeItem('userToken');
  onSignOut();
  alert('You have been signed out successfully.');
};

const showAlertMessage = (message) => {
  setAlertMessage(message);
  setShowAlert(true);
  setTimeout(() => {
    setShowAlert(false);
  }, 3000); // Hide the alert after 3 seconds
};


  const { quoteItemsCount } = useQuote();

 
  const handleNavCollapse = () => {
    setCollapsed(true); // Set collapsed state to true when a Nav.Link is clicked
  };
  return (
    <>
     <Navbar expand="lg" bg="white" variant="light" fixed="top">
        <Container >
          <Navbar.Brand as={Link} to="/">
            <img
              src={Logo}
              alt="Logo"
              height="50"
              className="d-inline-block align-top mr-3"
            />
          </Navbar.Brand>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
         <Nav.Link as={Link} to="/prodcts">Our Products</Nav.Link>
         {/* <Nav.Link as={Link} to="/ourservices">Our Products</Nav.Link> */}
          <Nav className="ml-auto" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          {isLoggedIn || isSignedUp ? (
              <NavDropdown title={<FaUser className="profile-icon" />} style={{ margin: '14px', fontSize:'0.8rem'}} id="collapsible-nav-dropdown">
                <NavDropdown.Item style={{fontSize: '0.89rem'}}>{userEmail}</NavDropdown.Item>
                <NavDropdown.Item style={{fontSize: '0.89rem'}} onClick={onSignOut}>Sign Out</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown title={<FaUser className="profile-icon" />} style={{ margin: '14px', fontSize:'0.8rem'}} id="collapsible-nav-dropdown">
                {/* <NavDropdown.Item style={{fontSize: '0.89rem'}} onClick={() => setShowSignIn(true)}>Sign In</NavDropdown.Item> */}
                <NavDropdown.Item style={{fontSize: '0.89rem'}} as={Link} to="/signup">Sign Up</NavDropdown.Item>
                <NavDropdown.Item style={{fontSize: '0.89rem'}} as={Link} to="/signin">Sign In</NavDropdown.Item>
              </NavDropdown>
            )}
            <Link to="/quotes" className="learn-more-button">
              Get Quotes
              {quoteItemsCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {quoteItemsCount}
                  <span className="visually-hidden">unread messages</span>
                </span>
              )}
            </Link>
          </Nav>
        </Container>
      </Navbar>

      <Alert variant="success" show={!!alertMessage} onClose={() => showAlertMessage('')} dismissible>
        {alertMessage}
      </Alert>

     {/* Second Navbar */}
     <div style={{ marginTop: '85px' }}>
     <Navbar bg="dark" variant="dark" expand="lg" className="second-navbar" style={{fontSize: '15.59px', margin:'inherit',zIndex: '1001'}} fixed="top">
        <Container fluid>
        <Navbar.Toggle onClick={() => setCollapsed(!collapsed)} aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-second-navbar">
            <Nav className="mr-auto marquee">
              <Nav.Link as={Link} to="/wiremesh" onClick={handleNavCollapse}>Wiremesh</Nav.Link>
              <Nav.Link as={Link} to="/conceal_lock" onClick={handleNavCollapse}>Conceal Lock</Nav.Link>
              {/* <Nav.Link as={Link} to="/wool_pipe">Wool Pipe</Nav.Link> */}
              <Nav.Link as={Link} to="/sliding_window_roller" onClick={handleNavCollapse}>Sliding Window Roller</Nav.Link>
              <Nav.Link as={Link} to="/louvers" onClick={handleNavCollapse}>Louver's</Nav.Link>
              <Nav.Link as={Link} to="/pvc_gasket" onClick={handleNavCollapse}>PVC Gasket</Nav.Link>
              <Nav.Link as={Link} to="/domal_accessories" onClick={handleNavCollapse}>Domal Accessories</Nav.Link>
              <Nav.Link as={Link} to="/silicone_sealant" onClick={handleNavCollapse}>Silicone Sealant</Nav.Link>
              <Nav.Link as={Link} to="/friction_stay" onClick={handleNavCollapse}>Friction Stay</Nav.Link>
              <Nav.Link as={Link} to="/floor_spring_&_door_closer" onClick={handleNavCollapse}>Floor Spring & Door Closer</Nav.Link>
              <Nav.Link as={Link} to="/Acrylic_Foam_Tape_&_Spacer_Tape" onClick={handleNavCollapse}>Acrylic Foam Tape & Spacer Tape</Nav.Link>
              <Nav.Link as={Link} to="/Fiber_Bidding" onClick={handleNavCollapse}>Fiber Bidding</Nav.Link>
              <Nav.Link as={Link} to="/nails" onClick={handleNavCollapse}>Nails</Nav.Link>
              <Nav.Link as={Link} to="/guns" onClick={handleNavCollapse}>Guns</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>

      {/* Sign In Modal */}
      <Modal show={showSignIn} onHide={() => setShowSignIn(false)}>
        <Modal.Header closeButton>
          <Modal.Title  className="modal_title">Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignInForm onSignIn={handleSignIn} />
        </Modal.Body>
      </Modal>

      {/* Sign Up Modal */}
      <Modal show={showSignUp} onHide={() => setShowSignUp(false)} className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title  className="modal_title">Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignUpForm onSignUp={handleSignUp} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CustomNavbar;