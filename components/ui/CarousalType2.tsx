"use client";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import img1 from 'Img-Interview.avif';
import React from 'react';

function Caraousal2() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100"
          src="https://cdn.mygingergarlickitchen.com/images_webp/675px/675px-veg-chezwan-noodles-recipe-9.webp"
          alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="../components/images/Img-Interview.avif" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="../components/images/Img-Interview.avif" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Caraousal2;