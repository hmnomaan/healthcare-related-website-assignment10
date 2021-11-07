import React from 'react';
import { Link } from 'react-router-dom';

const Doctor = (props) => {
    const { id, serviceName,doctorContact,doctorImg, doctorName} = props.doctor;
    return (
        <div>
          <div className=" img-fluid card text-black bg-white mb-3 m-2" >
                
                <div className="card-body">
                    <h4 width="200px" className="card-title">Name: {doctorName}</h4>
                    <img  src={doctorImg} alt="" />
                <h4>Sepcialist:{serviceName}</h4>
                <h4>Contact:{doctorContact}</h4>
                </div>
                <div>
                    <button className="btn-primary m-2 card-footer "><Link to={`/doctor/${id}`} className="text-black decoration">View Details</Link></button>
                </div>

            </div>
        </div>
    );
};

export default Doctor;