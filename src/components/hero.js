import Carousel from 'react-bootstrap/Carousel';
import './hero.css';


var heroData = [
  {
    id: 1,
    image: require('../img/spacejoy-808a4AWu8jE-unsplash.jpg'),
    title: 'Our Mission',
    description: 'To be a leading Aluminium accessories supplier across the globe.',
    link: 'https://www.google.com'
  },
  {
    id: 2,
    image: require('../img/spacejoy-RqO6kwm4tZY-unsplash.jpg'),
    title: 'Our Vision',
    description: 'To create positive and long-lasting relationships with our valuable clients.',
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: require('../img/spacejoy-9xoQJ-3-HGs-unsplash.jpg'),
    title: 'Our Goal',
    description: 'Explicabo quam repellendus vero omnis, nisi odio!',
    link: 'https://www.twitter.com'
  }
]

function AppHero() {
  return (
    <section id="home" className="hero-block">
       <Carousel>
          {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    className="d-block w-100"
                    src={hero.image}
                    alt={"slide " + hero.id}
                  />
                  <Carousel.Caption>
                    <h2>{hero.title}</h2>
                    <p>{hero.description}</p>
                    {/* <a className="learn-more-button" href={hero.link}>Learn More <i className="fas fa-chevron-right"></i></a>
                   */}
                  </Carousel.Caption>             
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
  );
}

export default AppHero;