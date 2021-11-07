import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

const Contact = () => {
    const formStyle = { background: "transparent", color: "white" };
    return (
        <div className="" >
            <div style={{ padding: "58px 0 40px" }}>
                <h2 className="text-center text-black">Contact Us</h2>
                <p className="text-center mb-4">
                    You can easily reach us through filling up the form
                </p>
                <div>
                    <Container>
                        <Form>
                            <Row>
                                <Col sm>
                                    <Form.Group
                                        className="mb-3 text-black"
                                        controlId="formBasicText"
                                    >
                                        <Form.Label>Your Name </Form.Label>
                                        <Form.Control
                                            style={formStyle}
                                            type="text" className="text-black"
                                            placeholder="Enter Your Name"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col sm>
                                    <Form.Group
                                        className="mb-3 text-black "
                                        controlId="formBasicEmail"
                                    >
                                        <Form.Label>Your Email </Form.Label>
                                        <Form.Control
                                            style={formStyle}
                                            type="email" className="text-black"
                                            placeholder="Enter Your Email"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Control
                                style={formStyle}
                                className="my-3 text-black"
                                type="text"
                                placeholder="Write Your Subject..."
                            />
                            <Form.Group
                                className="mb-3 "
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Your Messages</Form.Label>
                                <Form.Control
                                    style={formStyle}
                                    placeholder="Write you message..."
                                    as="textarea" className="text-black"
                                    rows={3}
                                />
                            </Form.Group>
                            <Button className="mb-5 py-2 text-white rounded bold px-4 bg-primary" variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Container>
                    <br />   <br />
                </div>
            </div>
        </div>
    );
};

export default Contact;