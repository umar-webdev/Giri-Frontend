// PrivacyPolicy.js
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy" style={{padding: '1.5rem'}}>
      <h2 style={{fontStyle: 'italic'}}>Privacy Policy</h2>
      <p>
        Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website.
      </p>
      <p>
        We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
      </p>
      <p>
        We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification.
      </p>
      <p>
        We don’t share any personally identifying information publicly or with third-parties, except when required to by law.
      </p>
      {/* Add more privacy policy content as needed */}
    </div>
  );
};

export default PrivacyPolicy;
