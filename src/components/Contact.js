import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelopeOpen } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';

const Contact = () => {
  return (
    <div className="container-xxl py-5" style={{ backgroundColor: 'lightgrey', marginTop: '10.2rem' }}>
      <div className="container">
        <div className="text-center">
          <h1 className="mb-5 text-black">Contact For Any Query</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <h5 className="text-black">Get In Touch</h5>
            <p className="mb-4 text-black">we offer a wide range of products such as Sliding window roller, Conceal lock, Wool pile, Wiremesh, PVC gasket, Louver's, Domal Accessories, Silicone sealant, Friction stay, Floor spring & Door closer, Acrylic foam tape, Fiber bidding, etc. </p>
            <div className="d-flex align-items-center mb-4">
              <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-black text-black" style={{ width: '50px', height: '50px', borderRadius: '50%' }}>
                <ImLocation2 color="white" />
              </div>
              <div className="ms-3">
                <h5 className="text-black">Office</h5>
                <p className="mb-0 text-black">Dombivali (East), Mumbai.</p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-4">
              <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-black text-black" style={{ width: '50px', height: '50px', borderRadius: '50%' }}>
                <FaPhoneAlt color="white" />
              </div>
              <div className="ms-3">
                <h5 className="text-black">Mobile</h5>
                <p className="mb-0 text-black">+91 86938 19715</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-black text-black" style={{ width: '50px', height: '50px', borderRadius: '50%' }}>
                <FaEnvelopeOpen color="white" />
              </div>
              <div className="ms-3">
                <h5 className="text-black">Email</h5>
                <p className="mb-0 text-black">info@girirajtrading.in</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <iframe className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder="0" style={{ minHeight: '300px', border: '0' }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
          </div>
          <div className="col-lg-4 col-md-12">
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="name" placeholder="Your Name" />
                    <label htmlFor="name" className="text-black">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="email" className="form-control" id="email" placeholder="Your Email" />
                    <label htmlFor="email" className="text-black">Your Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="subject" placeholder="Subject" />
                    <label htmlFor="subject" className="text-black">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '100px' }}></textarea>
                    <label htmlFor="message" className="text-black">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="learn-more-button w-100 py-3" type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
