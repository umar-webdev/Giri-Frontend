import React from 'react';
import '../components/Statistics.css';

const Statistics = () => {
  return (
    <section id="statistics" className="statistics">
      <div className="container">
        <div className="statistics-counter">
          
          <div className="col-md-3 col-sm-6">
            <div className="single-ststistics-box">
              <div className="statistics-content">
                <div className="counter">65</div> <span>k+</span>
              </div>
              <h3>visitors</h3>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="single-ststistics-box">
              <div className="statistics-content">
                <div className="counter">50</div> <span>k+</span>
              </div>
              <h3>happy clients</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
