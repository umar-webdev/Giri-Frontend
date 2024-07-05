import '../components/Wiremesh.css';
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
// import wiremesh1 from "../img/PRODUCT1/wiremesh/GT-226.jpg";
import wiremesh2 from "../img/PRODUCT1/wiremesh/GT-227.jpg";
import wiremesh3 from "../img/PRODUCT1/wiremesh/GT-228.jpg";

const products = [
   {
    name: 'Aluminium Wiremesh',
    MOQ: '80 pc',
    image: "/39.jpg",
    rating: 4.8,
    rate: 10,
    info:
      '14*14, 18*16  Colour: SS Finish | Bright Finish | Black Finish Length: 30 meters Long Packing: 1 Roll in Box',
      colors: ['Red', 'Green', 'Blue', 'Black', 'White'], // Color options
      images: [
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg',
        '5.jpg',
      ], 
  },
  {
    name: 'SS Wiremesh',
    MOQ: '80 pc',
    image:"/70.jpg",
    rating: 4.8,
    rate: 20,
    info: 'Grade: 202, 304  Colour: SS Finish | Black Finish  Length: 100ft  Packing: 1 Roll in Bag',
    colors: ['Silver', 'Black', 'White', 'Yellow', 'Brown'], 
    images: [
      '1.jpg',
      '2.jpg',
      '3.jpg',
      '4.jpg',
      '5.jpg',
    ], // Color options
  },
  {
    name: 'Fiber Wiremesh',
    MOQ: '80 pc',
    image: "/43.jpg",
    rating: 4.8,
    rate: 30,
    info: '18*16 | 120 GSM Colour: Black | Grey | Ivory Available Size: 2ft to 5ft. Length: 100ft Packing: 10 Roll in Bag',
    colors: ['Black', 'Grey', 'Ivory', 'Brown', 'Blue'],
     images: [
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg',
        '5.jpg',
      ],  // Color options
  },
];

const itemsPerPage = 6;

function Wiremesh() {
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


  const handleColorChange = (color) => {
    const selectedProductCopy = { ...selectedProduct };
    // Find the corresponding image URL based on the selected color
    const imageIndex = selectedProductCopy.colors.indexOf(color);
    if (imageIndex !== -1) {
      selectedProductCopy.image = selectedProductCopy.images[imageIndex];
      setSelectedProduct(selectedProductCopy);
    }
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
                    {/* <div className="colors-container">
  {product.colors.map((color, idx) => (
    <span
      key={idx}
      className="color-option"
      style={{ backgroundColor: color }}
      title={color}
    />
  ))}
</div> */}
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
        <h4>Perfect Wiremesh</h4>
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

export default Wiremesh;