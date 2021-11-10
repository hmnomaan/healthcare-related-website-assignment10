import React from 'react';
import { Link } from 'react-router-dom';

const Doctor = (props) => {
    const { id, serviceName, doctorContact, doctorImg, doctorName } = props.doctor;
    return (
        <div className="p-2 card-width expert-container">



            <div className="text-center img-fluid card text-black bg-white mb-3 m-2" >

                <div className="card-body">
                    <h4 className="card-title">Service Name: {serviceName}</h4>
                    <img src={doctorImg} alt="" /> <h4>{doctorName}</h4>
                </div>
                <div className="text-center ">
                    <h4>Contact:{doctorContact}</h4>
                </div>
                <button className="btn-primary m-2 card-footer "><Link to={`/doctor/${id}`} className="text-black decoration">View Details</Link></button>
            </div>
        </div>
    );
};

export default Doctor;