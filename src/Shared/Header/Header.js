import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import {HashLink} from 'react-router-hash-link'

const Header = () => {
    const {user,logOut}=useAuth();
    return (
        <div className="sticky-top">
            <Navbar bg="dark" variant="dark"  collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home#home" className=" p-4 mt-0" title="Nurun Nahar Begum Health Care">Nurun Nahar Begum Health Care</Navbar.Brand> <Navbar.Toggle />
                    <Navbar.Collapse className=" justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home" className="text-white" >Home</Nav.Link>
                        <Nav.Link as={HashLink} id="#services" to="/home#services" className="text-white">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#experts" className="text-white">Specialists</Nav.Link>
                        <Nav.Link as={Link} to="/doctors" className="text-white">Doctors</Nav.Link>
                        <Nav.Link as={Link} to="/about" className="text-white">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="text-white"> Contact</Nav.Link>
                        {user?.email ?
                        <Button onClick={logOut} variant="light">LogOut{logOut}</Button>:
                        <Nav.Link as={Link} to="/login" className="text-white" > Login</Nav.Link>}
                        <Navbar.Text className="p-1">
                            Signed in as: <a href="#login">{
                                    user?.photoURL !== undefined?
                                        <div className="">
                                            <img className=" rounded-circle" width="30px" src={user?.photoURL} alt={user?.displayName} />
                                        </div>
                                          :
                                        <div></div>
                                
                                } {<div className="" >{user?.displayName}</div> }

</a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;