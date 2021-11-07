import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    const {isLoading } = useAuth();
    if(isLoading){ 
        return <div className="mt-5 mb-5 d-flex justify-content-center" > <Spinner  animation="border" variant="danger"></Spinner></div>
    }
    return (
        <div  className="">
            <Banner id="home"></Banner>
            <Services id="servcesi"></Services>
            <Experts id="experts"></Experts>
            
        </div>
    );
};

export default Home;