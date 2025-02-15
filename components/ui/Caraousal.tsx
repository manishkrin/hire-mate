import React from 'react';
import { Carousel, Container, Button } from 'react-bootstrap';

const CarouselComponent = () => {
  return (
    <Carousel id="myCarousel" className="mb-6">
      <Carousel.Item>
        <svg 
          className="bd-placeholder-img" 
          width="100%" 
          height="100%" 
          xmlns="http://www.w3.org/2000/svg" 
          aria-hidden="true" 
          preserveAspectRatio="xMidYMid slice" 
          focusable="false"
        >
          <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
        </svg>
        <Container>
          <Carousel.Caption className="text-start">
            <h1>Example headline.</h1>
            <p className="opacity-75">
              Some representative placeholder content for the first slide of the carousel.
            </p>
            <p>
              <Button variant="primary" size="lg" href="#">
                Sign up today
              </Button>
            </p>
          </Carousel.Caption>
        </Container>
      </Carousel.Item>

      <Carousel.Item>
        <svg 
          className="bd-placeholder-img" 
          width="100%" 
          height="100%" 
          xmlns="http://www.w3.org/2000/svg" 
          aria-hidden="true" 
          preserveAspectRatio="xMidYMid slice" 
          focusable="false"
        >
          <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
        </svg>
        <Container>
          <Carousel.Caption>
            <h1>Another example headline.</h1>
            <p>
              Some representative placeholder content for the second slide of the carousel.
            </p>
            <p>
              <Button variant="primary" size="lg" href="#">
                Learn more
              </Button>
            </p>
          </Carousel.Caption>
        </Container>
      </Carousel.Item>

      <Carousel.Item>
        <svg 
          className="bd-placeholder-img" 
          width="100%" 
          height="100%" 
          xmlns="http://www.w3.org/2000/svg" 
          aria-hidden="true" 
          preserveAspectRatio="xMidYMid slice" 
          focusable="false"
        >
          <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
        </svg>
        <Container>
          <Carousel.Caption className="text-end">
            <h1>One more for good measure.</h1>
            <p>
              Some representative placeholder content for the third slide of this carousel.
            </p>
            <p>
              <Button variant="primary" size="lg" href="#">
                Browse gallery
              </Button>
            </p>
          </Carousel.Caption>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;