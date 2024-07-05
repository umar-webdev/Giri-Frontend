import React, { useState, useEffect } from 'react';
import './ReviewSlider.css';

const ReviewSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.",
      author: 'Alyssa Morris',
      position: 'Product Manager, Intel',
      imageSrc: 'https://source.unsplash.com/IF9TK5Uy-KI',
    },
    {
      quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.',
      author: 'Randall Howard',
      position: 'UX Designer, Netflix',
      imageSrc: 'https://source.unsplash.com/C5XyLljkMrY',
    },
    {
      quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.',
      author: 'Adam Worrell',
      position: 'Data Analyst, Spotify',
      imageSrc: 'https://source.unsplash.com/e12wQLAjQi0',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (activeIndex + 1) % testimonials.length;
      setActiveIndex(newIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, testimonials.length]);

  return (
    <section className="review-slider-container" style={{padding:'1.5rem'}}>
    <div className='container-fluid test1'>
      <div className='testimonial-container'>
        <div className='testimonial-content'>
          <h2 style={{ fontFamily: 'Public Sans, sans-serif', fontStyle: 'italic', fontWeight: '400' }}>Read what our customers love about us</h2>
          <ul className='testslider'>
            {testimonials.map((testimonial, index) => (
              <li
                key={index}
                className={`testitem ${index === activeIndex ? 'active' : ''}`}
              >
                <div className='testimonial'>
                  <p>"{testimonial.quote}"</p>
                  <p>{testimonial.author}</p>
                  <p>{testimonial.position}</p>
                </div>
                <img
                  className='testimage'
                  src={testimonial.imageSrc}
                  alt={`Slide ${index + 1}`}
                />
              </li>
            ))}
          </ul>
          <nav>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testbtn ${index === activeIndex ? 'expand' : ''}`}
                onClick={() => setActiveIndex(index)}
              ></button>
            ))}
          </nav>
        </div>
        {/* <div className='additional-content'>
          <h3>Read what our customers love about us</h3>
          <p>
            Add any additional information or content you want to display on
            the right side here.
          </p>
        </div> */}
      </div>
    </div>
    </section>
  );
};

export default ReviewSlider;
