import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';
import { Link, Route, Switch, useHistory, useParams } from 'react-router-dom'; // Import necessary components from React Router
import './services.css';

const worksData = [
  {
    id: 1,
    link: '/wiremesh',
    image: require('../img/cat1.jpeg'),
    title: 'Wiremesh',
    subtitle: 'Web Design'
  },
  {
    id: 2,
    link: '/conceal_lock',
    image: require('../img/cat2.jpeg'),
    title: 'Conceal Lock',
    subtitle: 'Branding'
  },
  {
    id: 3,
    link: '/wool_pipe',
    image: require('../img/cat3.jpeg'),
    title: 'Wool Pipe',
    subtitle: 'Web Design'
  },
  {
    id: 4,
    link: '/sliding_window_roller',
    image: require('../img/cat4.jpeg'),
    title: 'Sliding WIndow Roller',
    subtitle: 'Branding'
  },
  {
    id: 5,
    link: '/louvers',
    image: require('../img/cat5.jpeg'),
    title: 'Louvers',
    subtitle: 'Photography'
  },
  {
    id: 6,
    link: '/pvc_gasket',
    image: require('../img/cat6.jpg'),
    title: 'PVC Gasket',
    subtitle: 'Web Design'
  },
  {
    id: 7,
    link: '/domal_accessories',
    image: require('../img/spacejoy-c0JoR_-2x3E-unsplash.jpg'),
    title: 'Domal Accessories',
    subtitle: 'Branding'
  },
  {
    id: 8,
    link: '/silicone_sealant',
    image: require('../img/spacejoy-c0JoR_-2x3E-unsplash.jpg'),
    title: 'Silicone Sealant',
    subtitle: 'Photography'
  },
  {
    id: 9,
    link: '/friction_stay',
    image: require('../img/spacejoy-c0JoR_-2x3E-unsplash.jpg'),
    title: 'Friction Stay',
    subtitle: 'Web Design'
  },
  {
    id: 10,
    link: '/floor_spring_&_door_closer',
    image: require('../img/spacejoy-c0JoR_-2x3E-unsplash.jpg'),
    title: 'Floor Spring & Door Closer',
    subtitle: 'Web Design'
  },
  {
    id: 11,
    link: '/Acrylic_Foam_Tape_&_Spacer_Tape',
    image: require('../img/spacejoy-c0JoR_-2x3E-unsplash.jpg'),
    title: 'Acrylic Foam Tape & Spacer Tape',
    subtitle: 'Web Design'
  },
  {
    id: 12,
    link: '/Fiber_Bidding',
    image: require('../img/spacejoy-c0JoR_-2x3E-unsplash.jpg'),
    title: 'Fiber Bidding',
    subtitle: 'Web Design'
  }
]

const itemsPerPage = 6; // Adjust this based on how many items you want per page

function AppWorks() {
  const [activePage, setActivePage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(worksData.length / itemsPerPage);

  // Calculate the start and end index for the current page
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentPageData = worksData.slice(startIndex, endIndex);

  // Dynamically create pagination items based on the total number of pages
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

  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our works</h2>
          <div className="subtitle">our awesome works</div>
        </div>
        <Row className='portfoliolist' style={{padding: '1.2rem'}}>
          {currentPageData.map(works => (
            <Col sm={4} key={works.id}>
              <div className='portfolio-wrapper'>
                <a href={works.link}>
                  <Image src={works.image} />
                  <div className='label text-center'>
                    <h3>{works.title}</h3>
                    <p>{works.subtitle}</p>
                  </div>
                </a>
              </div>
            </Col>
          ))}
        </Row>
        <Pagination>{paginationItems}</Pagination>
      </Container>  
    </section>
  );
}

export default AppWorks;
