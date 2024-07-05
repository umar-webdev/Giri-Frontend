// UserProfile.js
import React from 'react';
import { Card, Image, Button } from 'react-bootstrap';

const UserProfile = ({ user }) => {
  const handleLogout = () => {
    // Add logic to handle logout
    console.log('Logout clicked');
  };

  const handleEditProfile = () => {
    // Add logic to handle edit profile
    console.log('Edit Profile clicked');
  };

  return (
    <Card className="mt-5">
      <Card.Body className="d-flex flex-column align-items-md-center">
        {/* Image on the left side */}
        <Image
          src={user.image}
          alt="User Image"
          rounded
          className="mb-3 mx-md-3"
          style={{ maxWidth: '100px', maxHeight: '100px' }}
        />

        <div className="text-center text-md-left">
          <Card.Title>User Profile</Card.Title>
          <Card.Text>
            <strong>Name:</strong> {user.name} <br />
            <strong>Email:</strong> {user.email} <br />
            <strong>Company Name:</strong> {user.companyName} <br />
            <strong>GST Number:</strong> {user.gstNumber} <br />
          </Card.Text>
          
          {/* Logout and Edit buttons */}
          <Button className="learn-more-button" onClick={handleLogout}>
            Logout
          </Button>
        
        </div>
      </Card.Body>
    </Card>
  );
};

export default UserProfile;
