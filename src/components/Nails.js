// Nails.js
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';
import { FaStar, FaMoneyBill, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-bootstrap/Modal';
import Logo from './logo.png';
import Button from 'react-bootstrap/Button';
import { Navbar} from 'react-bootstrap';

import './ProductDetails.css'

import { useQuote } from './QuoteContext';

// Importing images
import khila1 from "../components/prodimg/khila-1.jpg";
import khila2 from "../components/prodimg/khila-2.jpg";
import khila3 from "../components/prodimg/khila-3.jpg";
import khila4 from "../components/prodimg/khila-4.jpg";
import khila5 from "../components/prodimg/khila-5.jpg";
import khila6 from "../components/prodimg/khila-6.jpg";
import khila7 from "../components/prodimg/khila-7.jpg";
import khila8 from "../components/prodimg/khila-8.jpg";
import khila9 from "../components/prodimg/khila-9.jpg";
import khila10 from "../components/prodimg/khila-10.jpg";

const products = [
  { name: 'Giriraj Screw', MOQ: '80 pc', image: khila1, rating: 4.8, rate: 10, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.' },
  { name: 'Metal Screw', MOQ: '80 pc', image: khila2, rating: 4.8, rate: 20, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.'  },
  { name: 'Chipboard Screw', MOQ: '80 pc', image: khila5, rating: 4.8, rate: 30, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.'  },
  { name: 'Wooden Screw', MOQ: '80 pc', image: khila6, rating: 4.8, rate: 50, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.'  },
  { name: 'Anchor Screw', MOQ: '80 pc', image: khila7, rating: 4.8, rate: 20, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.' },
  { name: 'FLange Hex SDS Screw', MOQ: '80 pc', image: khila8, rating: 4.8, rate: 30, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.' },
  { name: 'Truss head SDS Screw', MOQ: '80 pc', image: khila9, rating: 4.8, rate: 30, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.' },
  { name: 'Nylon Anchor Screw', MOQ: '80 pc', image: khila10, rating: 4.8, rate: 90, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.' },
  { name: 'Gypsum Screw', MOQ: '80 pc', image: khila3, rating: 4.8, rate: 30, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.' },
  { name: 'SDS Screw', MOQ: '80 pc', image: khila4, rating: 4.8, rate: 100, info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.' },
];


const itemsPerPage = 6;

function Nails() {
  const [activePage, setActivePage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToQuote } = useQuote();

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = products.slice(startIndex, endIndex);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Example state for authentication status



  const loginPrompt = () => {
    alert('Please log in to add items to the cart');
    // You can replace this alert with your actual login prompt logic, such as displaying a modal or redirecting to the login page
  };


  const paginationItems = [];
  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        active={number === activePage}
        onClick={() => setActivePage(number)}
      >
        {number}
      </Pagination.Item>,
    );
  }

  const handleShowModal = (product) => {
    setShowModal(true);
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };


  

  const handleAddToCart = (product) => {
 // if (!isLoggedIn) {
    //   // If user is not logged in, show login prompt or redirect to login page
    //   loginPrompt(); // Example function to display login prompt
    //   return;
    // }

    addToQuote(product);

    toast.success(`${product.name} added to get Quotes`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
     <section id="product" className="block product-block">
      <Container fluid>
        <Row className='portfoliolist' style={{padding: '1.2rem'}}>
          {currentPageData.map((product, index) => (
            <Col sm={4} key={index}>
              <div className='portfolio-wrapper'>
                <div>
                  <Image src={product.image} onClick={() => handleShowModal(product)} />
                  <div className='label text-center'>
                    <h3>{product.name}</h3>
                    {/* <div className='istar'>
                      <FaStar className="rating-star" />
                      <span className="rating-number">{product.rating}</span>
                    </div>
                    <span className="quantity-number">Qty: 1x</span>
                    <span className="quantity-number">{product.quantity}</span> */}
                    {/* <div className='imoney'>
                      <FaMoneyBill className="money-icon" />
                      <span className="rate">{product.rate}</span>
                    </div> */}
                    <div>
                      <button className="learn-more-button" onClick={() => handleAddToCart(product)}>
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Pagination>{paginationItems}</Pagination>
      </Container>

<section className='prodinfo' >
      <Modal show={showModal} onHide={handleCloseModal} dialogClassName="custom-modal product-details-modal" >
        <Modal.Header closeButton>
          <Modal.Title> 
            <Navbar.Brand as={Link} to="/">
            <img
              src={Logo}
              alt="Logo"
              height="50"
              className="d-inline-block align-top mr-3"
            />
          </Navbar.Brand>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="productcard">
            <Col xs={12} md={5} className="photo">
              <Image src={selectedProduct && selectedProduct.image} />
            </Col>
            <Col xs={12} md={7} className="description">      
        <h2>{selectedProduct && selectedProduct.name}</h2>
        <h4>Perfect Nails</h4>
        <h1>{selectedProduct && selectedProduct.rate}$</h1>
        <p>{selectedProduct && selectedProduct.info} </p>
        <Button className="learn-more-button" onClick={() => handleAddToCart(selectedProduct)}>
                Add to Cart
              </Button>
        {/* <Button className="close-button">Close</Button> */}

            </Col>
          </Row>
        </Modal.Body>

        
      </Modal>
      </section>
      <ToastContainer />
    </section>
  );
}

export default Nails;