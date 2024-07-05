import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../components/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs={12} sm={6} md={3}>
            {/* Column 1 */}
            <h5>Giriraj Trading</h5>
            <p>Dombivali (East), Mumbai.</p>
            <p>Phone: +91 86938 19715</p>
            <p>Email: info@girirajtrading.in</p>
          </Col>
          <Col xs={12} sm={6} md={3}>
            {/* Column 2 */}
            <h5>Useful Links</h5>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/aboutus">About Us</Link></p>
            <p><Link to="/prodcts">Our Services</Link></p>
            <p><Link to="/contact">Contact Us</Link></p>
            <p><Link to="/reviews">Reviews</Link></p>
          </Col>
          <Col xs={12} sm={6} md={3}>
            {/* Column 3 */}
            <h5>Our Products</h5>
            <p><Link to="/sliding_window_roller">Sliding Window Roller</Link></p>
            <p><Link to="/conceal_lock">Conceal Lock</Link></p>
            <p><Link to="/wool_pipe">Wool Pile - Silicone</Link></p>
            <p><Link to="/wiremesh">Wiremesh</Link></p>
            <p><Link to="/terms_and_conditions">Terms and Conditions</Link></p>
            <p><Link to="/privacy_policy">Privacy Policy</Link></p>
          </Col>
          <Col xs={12} sm={6} md={3}>
            {/* Column 4 */}
            <h5>Connect With Us</h5>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              {/* Add more social media icons as needed */}
            </div>
            <p>Copyright © 2021 GirirajTrading. All Rights Reserved.</p>
            <p>Designed by NSBigMedia</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
