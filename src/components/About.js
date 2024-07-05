import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id='aboutus' className="about section-padding">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 col-12">
            <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
              <div className="col-12">
                <h2 className="mb-5" style={{ fontWeight: '400' }}>
                  INTRODUCTION
                </h2>
              </div>
              <h4 className="mb-3">Hello, <span>We are </span>Giriraj Trading</h4>
              <p>Established in the year 2000, with years passing, we have crossed our milestone in providing top quality solutions for all aluminium accessories concern. We have achieved our success goals with the help and support of valuable employees, trade associates and vendors.</p>
              <p>As an Aluminium accessories supplier, we offer a wide range of products such as Sliding window roller, Conceal lock, Wool pile, Wiremesh, PVC gasket, Louver's, Domal Accessories, Silicone sealant, Friction stay, Floor spring & Door closer, Acrylic foam tape, Fiber bidding, etc. We provide top quality products to our valuable clients and also have a dedicated team for technical support (After sale service). </p>
              <div className="mt-2 mt-lg-auto">
                <a href="about.html" className="custom-link mb-2 learn-more-button">
                  Learn more about us
                  <i className="bi-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-12">
            <img src="https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
