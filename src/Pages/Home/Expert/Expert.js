import React from 'react';
import './Expert.css'
const Expert = (props) => {
    const { image, serviceName, doctorImg, doctorName, doctorContact } = props.expert;
    return (
        <div className=" card-width expert-container">



            <div className="text-center img-fluid card text-black bg-white" >

                <div className="card-body">
                    <h4 className="card-title">Service Name: {serviceName}</h4>
                    <img src={doctorImg} alt="" /> <h4>{doctorName}</h4>
                </div>


            </div>
        </div>

    );
};

export default Expert;