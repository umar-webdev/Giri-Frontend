// MainComponent.js
import React from 'react';
import UserProfile from '../components/UserProfile'; // Adjust the import path based on your project structure


const MainComponent = () => {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    username: 'john_doe',
    companyName:'NSBIG',
    gstNumber:'124ds3',
    image: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_960_720.png'
    // Add more user details as needed
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
    <div>
      <h1 className="text-center mb-4" style={{fontFamily:'Lohit Devanagari',fontStyle:'italic',fontWeight: 400}}>Your Profile</h1>
      <UserProfile user={user} />
    </div>
  </div>
);
};

export default MainComponent;
