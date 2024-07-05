// SlidingWindowRoller.js
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
import sliding_window_roller1 from "../img/PRODUCT1/roller/GT-101.png";
import sliding_window_roller2 from "../img/PRODUCT1/roller/GT-102.png";
import sliding_window_roller3 from "../img/PRODUCT1/roller/GT-103.png";
import sliding_window_roller4 from "../img/PRODUCT1/roller/GT-104.png";
import sliding_window_roller5 from "../img/PRODUCT1/roller/GT-105.png";
import sliding_window_roller6 from "../img/PRODUCT1/roller/GT-106.png";
import sliding_window_roller7 from "../img/PRODUCT1/roller/GT-107.png";
import sliding_window_roller8 from "../img/PRODUCT1/roller/GT-108.png";
import sliding_window_roller9 from "../img/PRODUCT1/roller/GT-109.png";
import sliding_window_roller10 from "../img/PRODUCT1/roller/GT-110.png";

import sliding_window_roller11 from "../img/PRODUCT1/roller/GT-111.png";
import sliding_window_roller12 from "../img/PRODUCT1/roller/GT-112.png";
import sliding_window_roller13 from "../img/PRODUCT1/roller/GT-113.png";
import sliding_window_roller14 from "../img/PRODUCT1/roller/GT-114.png";
import sliding_window_roller15 from "../img/PRODUCT1/roller/GT-115.png";
import sliding_window_roller16 from "../img/PRODUCT1/roller/GT-116.png";
import sliding_window_roller17 from "../img/PRODUCT1/roller/GT-117.png";
import sliding_window_roller18 from "../img/PRODUCT1/roller/GT-118.png";
import sliding_window_roller19 from "../img/PRODUCT1/roller/GT-119.png";
import sliding_window_roller20 from "../img/PRODUCT1/roller/GT-120.png";

import sliding_window_roller21 from "../img/PRODUCT1/roller/GT-121.png";
import sliding_window_roller22 from "../img/PRODUCT1/roller/GT-122.png";
import sliding_window_roller23 from "../img/PRODUCT1/roller/GT-123.png";
import sliding_window_roller24 from "../img/PRODUCT1/roller/GT-124.png";


const products = [
  { name: 'GT-101', MOQ: '80 pc', image: "/15.jpg", rating: 4.8, rate: 10, info:'Straight Bracket | DR22HF' },
  { name: 'GT-102', MOQ: '80 pc', image: "/16.jpg", rating: 4.8, rate: 20, info:'Straight Bracket | DR22HF(Pr.)'  },
  { name: 'GT-103', MOQ: '80 pc', image: "/17.jpg", rating: 4.8, rate: 30, info:'Cover Bracket | DR22HF'  },
  { name: 'GT-104', MOQ: '80 pc', image: "/18.jpg", rating: 4.8, rate: 50, info:'Bracket Molding| 625ZZ'  },
  { name: 'GT-105', MOQ: '80 pc', image: "/19.jpg", rating: 4.8, rate: 20, info:'Bracket Molding| 625ZZ (Pr.)' },
  { name: 'GT-106', MOQ: '80 pc', image: "/23.jpg", rating: 4.8, rate: 30, info:'UNO Bracket | 625ZZ / 695ZZ' },
  { name: 'GT-107', MOQ: '80 pc', image: "20.jpg", rating: 4.8, rate: 30, info:'Bracket Molding| 626ZZ (Pr.)' },
  { name: 'GT-108', MOQ: '80 pc', image: "24.jpg", rating: 4.8, rate: 90, info:'Tample Bracket | 626ZZ' },
  { name: 'GT-109', MOQ: '80 pc', image: "/3.jpg", rating: 4.8, rate: 30, info:'Tample Bracket | 626ZZ (Pr.)' },
  { name: 'GT-110', MOQ: '80 pc', image: "/25.jpg", rating: 4.8, rate: 100, info:'Metal Bracket | 625ZZ' },


  { name: 'GT-111', MOQ: '80 pc', image: "/21.jpg", rating: 4.8, rate: 10, info:'Bracket Molding| 626ZZ' },
  { name: 'GT-112', MOQ: '80 pc', image: "/22.jpg", rating: 4.8, rate: 20, info:'Tephlone Molding| 626ZZ (Pr.)'  },
  { name: 'GT-113', MOQ: '80 pc', image: "/27.jpg", rating: 4.8, rate: 30, info:'Metal Revers Bracket | 625ZZ'  },
  { name: 'GT-114', MOQ: '80 pc', image: "/31.jpg", rating: 4.8, rate: 50, info:'Adjustable Bracket | DR22'  },
  { name: 'GT-115', MOQ: '80 pc', image: "/32.jpg", rating: 4.8, rate: 20, info:'Adjustable Bracket | 626ZZ' },
  { name: 'GT-116', MOQ: '80 pc', image: "/75.jpg", rating: 4.8, rate: 30, info:'Door Adjustable Roller | 608ZZ' },
  { name: 'GT-117', MOQ: '80 pc', image: "/28.jpg ", rating: 4.8, rate: 30, info:'25mm Roller with Metal Bracket ' },
  { name: 'GT-118', MOQ: '80 pc', image: "/29.jpg", rating: 4.8, rate: 90, info:'25mm Roller with Nylon Bracket ' },
  { name: 'GT-119', MOQ: '80 pc', image: "/30.jpg", rating: 4.8, rate: 30, info:'UPVC Roller | 16mm' },
  { name: 'GT-120', MOQ: '80 pc', image: "/74.jpg", rating: 4.8, rate: 100, info:'UPVC Roller | 16mm, 14mm' },


  { name: 'GT-121', MOQ: '80 pc', image: "/2.jpg", rating: 4.8, rate: 10, info:'Z section Openable Handle' },
  { name: 'GT-122', MOQ: '80 pc', image: "/26.jpg", rating: 4.8, rate: 20, info:'Teph. Metal Bracket | 625ZZ '  },
  { name: 'GT-123', MOQ: '80 pc', image: "/4.jpg", rating: 4.8, rate: 30, info:'Long Metal Bracket | 625ZZ'  },
  { name: 'GT-124', MOQ: '80 pc', image: "/34.jpg", rating: 4.8, rate: 50, info:'UPVC Adjustable Roller'  },
  

];


const itemsPerPage = 6;

function SlidingWindowRoller() {
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
                    {/* <p>{`M.O.Q ${product.MOQ}`}</p> */}
                    {/* <div className='istar'>
                      <FaStar className="rating-star" />
                      <span className="rating-number">{product.rating}</span>
                    </div>
                    <span className="quantity-number">Qty: </span> 
                    <span className="quantity-number">1x</span> */}
                    {/* <FaTimes className="quantity_icon" /> */}
                    {/* <div className='imoney'>
                      <FaMoneyBill className="money-icon" />
                      <span className="rate">{product.rate}</span>
                    </div> */}
                    <div>
                    <div>
                    <button className="learn-more-button" onClick={() => handleAddToCart(product)}>
                      Add To Cart
                    </button>
                    </div>
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
        <h4>Perfect SlidingWindowRoller</h4>
        <h1>{selectedProduct && selectedProduct.rate}INR</h1>
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

export default SlidingWindowRoller;