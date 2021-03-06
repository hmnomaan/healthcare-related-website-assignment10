import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css'

const Doctors = () => {

    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('services.JSON')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])
    return (
        <div>

            <div id="" className=" mt-5">
                <div className="text-center ">
                    <h1 className="fontSize text-muted">We Provide Quality Services</h1>
                    <h2 className="fontSize"> Total Doctor: {doctors.length}</h2>
                    <p className="text-muted"> We are providing World Top Doctor's in NNB Health Care.</p>
                </div>
                <div className=" experts-container container ">
                    {
                        doctors.map(doctor => <Doctor className="col-4 col-sm-12 col-md-6"
                            key={doctor.id}
                            doctor={doctor}
                        >

                        </Doctor>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Doctors;