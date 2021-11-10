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
        <div id="services" className="container mt-5">
            <div className="text-center ">
                <h2 className="fontSize"> Top Services</h2>
                <p className="text-muted"> We are providing World Top Doctor's in NNB Health Care.</p>
            </div>
            {/* service-container */}
            <div className=" text-white d-flex justify-content-center align-items-center row row-cols-1 row-cols-md-3 row-cols-lg-4">
                {
                    services.map(service => <Service className=""
                        key={service.id}
                        service={service}
                    >

                    </Service>).slice(0, 8)
                }
            </div>
            <div className=" text-center mt-3"><button className="bg-primary p-3 border  seeMore " ><Link to={`/doctors`} className="text-white   "> See More</Link></button></div>
        </div>
    );
};

export default Services;