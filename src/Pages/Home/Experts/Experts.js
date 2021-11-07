import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';
import './Experts.css';
import { Col, Container, Row } from 'react-bootstrap';

const Experts = () => {
    const [experts, setExperts] = useState([]);

    useEffect(() => {
        fetch('services.JSON')
            .then(res => res.json())
            .then(data => setExperts(data));
    }, [])
    return (
        <div id="experts" >
            <div className="text-center mt-5"><h3 className="fontSize">Our Specialists</h3>
                <p className="text-muted ">Our Specialist Doctor are available any time now in NNB Health Care,No more hesitation to go abroad.</p></div>
            <div className="experts-container  g-5 mx-5 mt-4">
                {
                    experts.map(expert =>

                        <Expert className=""
                            key={expert.id}
                            expert={expert}
                        >

                        </Expert>).slice(0, 8)
                }
            </div>
          
           <div className="mt-5">
                <h1 className="text-center mt-5">What Actually Are We?</h1>
                <p className="text-muted text-center ">Our Specialist Doctor are available any time now in NNB Health Care,No more hesitation to go abroad.</p>
                <div className="bg-black">
                    <div className=" mx-5  text-white p-4">
                        <div md={6} sm={12}><p className="mx-3 mt-5">" A good relationship between a patient and his or her physician is the cornerstone of superb medical care. That relationship is important when you know the doctor well. It may be even more important when you don’t, say when you are in the hospital.Growing competition for new customers is inspiring American hospitals to focus on providing a more positive patient experience — and hospitals expect their doctors to do their part. "</p> <br />
                            <h4>-Dr. Anupum Reja Senior</h4>
                        </div>
                        <div className="text-center" ><iframe width="420" height="290" src="https://www.youtube.com/embed/2B4y7C7-I2M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>

                    </div>

                </div>

</div>
           


        </div>
    );
};

export default Experts;