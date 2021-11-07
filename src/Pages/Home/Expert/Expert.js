import React from 'react';
import './Expert.css'
const Expert = (props) => {
    const { serviceName, doctorImg, doctorName, doctorContact } = props.expert;
    return (
        <div className="p-2 card-width expert-container">

     <h3>{serviceName}</h3>
      <img src={doctorImg} alt="" />
      <h4>{doctorName}</h4>
      <h4>Contact:{doctorContact}</h4>
     
 </div>
 
    );
};

export default Expert;