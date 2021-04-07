import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';



const Header = () => {

    const [user, setUser] = useContext(UserContext)

    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const signedOutUser = {
                    name: null,
                    email: null,
                    error: null,
                }
                setUser(signedOutUser);
            })
    }

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
        >
            <Link to="/">
                <LinkContainer to="/">
                    <Navbar.Brand>Book Seller</Navbar.Brand>
                </LinkContainer>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    
                    <LinkContainer to="/home">
                        <Nav.Link className="ordinary-button">Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/admin">
                        <Nav.Link className="ordinary-button">Admin</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/orders">
                        <Nav.Link className="ordinary-button">Orders</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav>
                    
                    {
                        user.email? 
                        <LinkContainer to="/admin">
                        <Nav.Link className="ordinary-button">SignOut</Nav.Link>
                    </LinkContainer> 
                    : 
                    <LinkContainer to="/admin">
                        <Nav.Link onClick={handleSignOut} className="ordinary-button">Sign In</Nav.Link>
                    </LinkContainer>
                    }
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;