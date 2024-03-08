import React from 'react';
import { Navbar, Nav,NavDropdown} from 'react-bootstrap';
import './Styles/Header.css'

import image from './Images/Culinary Quests.jpg';

export default function Header() {
  let user = JSON.parse(localStorage.getItem('user-info'));
  
  function logout() {
    localStorage.clear();
    // Navigate logic goes here
  }

  return (
    <div>
      <Navbar className='Header'>
        <Navbar.Brand href="/">
          <img
            src={image}
            alt="logo"
            width="100px"
            height="80px"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="stylesnav">
            <Nav.Link id='e1' href="/">Home</Nav.Link>
            <Nav.Link id='e2' href="/FindRestaurants">Find Restaurants</Nav.Link>
            <Nav.Link id='e3' href="/DineIn">Dine-In</Nav.Link>
            <Nav.Link id='e4' href="/Login">Login</Nav.Link>
          </Nav>
          {localStorage.getItem('user-info') ? (
            <Nav>
              <NavDropdown title={user && user.name}>
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : null}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
