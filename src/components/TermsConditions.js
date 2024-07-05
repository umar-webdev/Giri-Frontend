// TermsConditions.js
import React from 'react';
import HeroImage from './HeroImage';

const TermsConditions = () => {
  return (
    
    <>

    <div className="terms-conditions" style={{padding: '1.5rem'}}>
      <h2>Terms and Conditions</h2>
      <p>
        Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern our relationship with you in relation to this website.
      </p>
      <p>
        The use of this website is subject to the following terms of use:
      </p>
      <ul>
        <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
        <li>This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, the following personal information may be stored by us for use by third parties: [list any information].</li>
        <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors, and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
        {/* Add more terms and conditions as needed */}
      </ul>
    </div>
    </>
  );
};

export default TermsConditions;
