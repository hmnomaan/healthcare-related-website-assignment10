import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Details.css'

const Details = () => {


    const { _id } = useParams();
    const [service, setService] = useState({}); 
    useEffect(() => {
        fetch(`/services.JSON`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                data.forEach(service => {
                    if (service.id ===Number(_id) ) {

                        setService(service);
                    }
                });


            });
    }, [_id]);
    return (
        <div>

            <div className="my-4">
                <Container><div className="text-center"><h3 >Service ID: {_id}</h3>
                <h2>Service Name:{service?.serviceName}</h2></div>
                    <Row className="d-flex justify-content-center">
                        <Col md={6} sm={12}>
                            <img className="img-fluid" src={service?.image} alt="service" />
                            <h5 className="text-muted">{service?.description}{service?.description}</h5>
                        </Col>
                        <Col md={6}  sm={12} className="d-flex justify-content-center flex-column mt-4">
                           
                           
                            <h5 className="text-muted">Description: {service?.description}</h5>
                            <Row>
                                <Col>
                                    <img className="img-fluid " src={service?.doctorImg} alt="" />
                                    <h2>Doctor Name: {service?.doctorName}</h2>
                                    <h1>Contact:{service?.doctorContact}</h1>
                                    <button className="bg-primary p-3 border text-white rounded" >Call Me</button>
                                    <div className="my-2">




                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>



            </div>
            
        </div>
    );
};

export default Details;