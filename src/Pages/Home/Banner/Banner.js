import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner1 from './../../../images/banner/1.jpg'
import banner2 from './../../../images/banner/2.jpg'
import banner3 from './../../../images/banner/3.jpg'
const Banner = () => {
  return (
    <div id="home">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 carousel"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption >
            <h3>Medical Help 24/7</h3>
            <p>We are always ready to help our Patients. You are our responsiblity.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 carousel"
            src={banner2}
            alt="Second slide"
          />
          <Carousel.Caption>
          <h3>Medical Help 24/7</h3>
            <p>We are always ready to help our Patients. You are our responsiblity.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 carousel"
            src={banner3}
            alt="Third slide"
          />
          <Carousel.Caption className="text-black">
          <h3>Medical Help 24/7</h3>
            <p>We are always ready to help our Patients. You are our responsiblity.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;