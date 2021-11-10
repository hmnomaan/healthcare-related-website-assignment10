import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import image1 from "./../../images/banner/1.jpg"
import image2 from "./../../images/banner/2.jpg"
import image3 from "./../../images/banner/3.jpg"

const About = () => {
    return (
        <div>
            <div
            >
                <Container>
                    <h1 className="text-center text-black mb-4 mt-5">
                        WELCOME TO Nurun Nahar Begum Health Care
                    </h1>
                    <h2 className="text-black text-center">About Us</h2>
                    <img className="img-fluid" src={image1} alt="" />
                    <Row>
                        <Col md className="pe-3">
                           
                            <p className="">
                            Medical Center Hospital (MCH) has proudly served Ector County and the surrounding 17 counties of the Permian Basin for over 70 years. We’ve come a long way since we opened our doors in 1949, growing from a small county hospital into a prosperous 402-bed regional medical center serving over 100,000 patients annually. While we’ve seen many changes over the years, some things have remained unchanged. We are still the only full-service hospital in the region, and we always strive to deliver the best care possible for the people of the Permian Basin.
                            </p>
                            <img className="img-fluid" src={image2} alt="" />
                            <p className="">
                            Medical Center Hospital (MCH) has proudly served Ector County and the surrounding 17 counties of the Permian Basin for over 70 years. We’ve come a long way since we opened our doors in 1949, growing from a small county hospital into a prosperous 402-bed regional medical center serving over 100,000 patients annually. While we’ve seen many changes over the years, some things have remained unchanged. We are still the only full-service hospital in the region, and we always strive to deliver the best care possible for the people of the Permian Basin.
                            </p>
                        </Col>
                        <img className="img-fluid" src={image3} alt="" />
                        <Col md className="pe-3">
                            <h5 className="text-black">Our Vision</h5>
                            <p className="">
                            Medical Center Hospital (MCH) has proudly served Ector County and the surrounding 17 counties of the Permian Basin for over 70 years. We’ve come a long way since we opened our doors in 1949, growing from a small county hospital into a prosperous 402-bed regional medical center serving over 100,000 patients annually. While we’ve seen many changes over the years, some things have remained unchanged. We are still the only full-service hospital in the region, and we always strive to deliver the best care possible for the people of the Permian Basin.
                            </p>
                            <h5 className="text-black">Our Mission</h5>
                            <p className="">
                            Medical Center Hospital (MCH) has proudly served Ector County and the surrounding 17 counties of the Permian Basin for over 70 years. We’ve come a long way since we opened our doors in 1949, growing from a small county hospital into a prosperous 402-bed regional medical center serving over 100,000 patients annually. While we’ve seen many changes over the years, some things have remained unchanged. We are still the only full-service hospital in the region, and we always strive to deliver the best care possible for the people of the Permian Basin.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col md>
                            <h5 className="text-black">Sign up for our monthly newsletter</h5>
                            <p className="">
                                Be the first to know about news and updates.We never share you
                                mail with others. Trust us!
                            </p>
                        </Col>
                        <Col md className="d-flex align-items-center py-5">
                            <Form className="w-100">
                                <Form.Label className="text-black">
                                    Leave your mail below
                                </Form.Label>
                                <Form.Group
                                    className="d-flex text-white"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Control
                                        style={{ background: "transparent", color: "white" }}
                                        className="py-2 rounded-0"
                                        type="email"
                                        placeholder="Enter email"
                                    />
                                    <button
                                        style={{ width: "120px" }}
                                        className="btn rounded-0 btn-primary"
                                    >
                                        SIGN UP
                                    </button>
                                    <br />   <br />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                <div className="mt-5">
                <h1 className="text-center mt-5">What Actually Are We?</h1>
                <p className="text-muted text-center ">Our Specialist Doctor are available any time now in NNB Health Care,No more hesitation to go abroad.</p>
                <div className="bg-black">
                    <div className="container  d-flex  text-white p-4">
                        <div><p className="mx-3 mt-5">" A good relationship between a patient and his or her physician is the cornerstone of superb medical care. That relationship is important when you know the doctor well. It may be even more important when you don’t, say when you are in the hospital.Growing competition for new customers is inspiring American hospitals to focus on providing a more positive patient experience — and hospitals expect their doctors to do their part. "</p> <br />
                            <h4>-Dr. Anupum Reja Senior</h4>
                        </div>
                       

                    </div>

                </div>


            </div>

               
            </div>

        </div>
    );
};

export default About;