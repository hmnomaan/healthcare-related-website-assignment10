import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/NotFoundPage/1.jpg'
const NotFound = () => {
    return (
        <div className="bg-info ">
            <div  className="text-center"><img width="60%"src={notfound} alt="" /></div>
            <div className="text-center"><Link to="/">
                <button className=" rounded p-3 bg-warning text-white">Go Back</button>
            </Link></div>
            <br />  <br />  <br />  <br />  <br />
        </div>
    );
};

export default NotFound;