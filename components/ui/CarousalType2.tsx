"use client";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
//import Image from 'next/Image';
//import img1 from './Img-Interview.avif';
import React from 'react';

function Caraousal2() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image className="d-block w-100 h-50"
          src="https://awsstatics3.s3.ap-south-1.amazonaws.com/couple.jpg"
          alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="d-block w-100 h-50" src="https://awsstatics3.s3.ap-south-1.amazonaws.com/Img-Interview.avif" alt="Second slide" thumbnail/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="d-block w-100 h-50" src="https://awsstatics3.s3.ap-south-1.amazonaws.com/couple.jpg" />
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