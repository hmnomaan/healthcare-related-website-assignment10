import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id="services" className=" mt-5">
            <div className="text-center ">
            <h2 className="fontSize"> Top Services</h2>
             <p className="text-muted"> We are providing World Top Doctor's in NNB Health Care.</p>
            </div>
            <div className="service-container mx-5 g-5 mt-4">
                {
                    services.map(service => <Service className="service-container"
                        key={service.id}
                        service={service}
                        >

                        </Service>).slice(0, 9)
                }
            </div>
            <div className=" text-center mt-3"><button  className="bg-primary p-3 border  seeMore " ><Link to={`/doctors`} className="text-white   "> See More</Link></button></div>
        </div>
    );
};

export default Services;