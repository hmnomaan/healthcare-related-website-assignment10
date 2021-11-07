import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { id, serviceName, image, description } = props.service;
    return (
        <div>
            <div className=" img-fluid card text-black bg-white mb-3 m-2" >
                <img height="200px" src={image} alt="" />
                <div className="card-body">
                    <h4 className="card-title">Service Name: {serviceName}</h4>
                    <p className="card-text">Description:<small> {description.slice(0, 170)}</small></p>
                </div>
                <div className="text-center ">
                    <button className="btn-primary m-2 card-footer  "><Link to={`/service/${id}`} className="text-info ">View Details</Link></button>
                </div>

            </div>
        </div>
    );
};

export default Service;