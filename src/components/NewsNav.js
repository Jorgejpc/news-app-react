//This component recieves setCategory from App.js
//It also import the categories from the Categories file
//It uses the data from the Categories file to create each button on the nav
//When a botton is pressed, setCategory is invoked to the update the category value to match the botton pressed

import React from 'react';
import categories from '././NavNews/categories';
import Logo from '././NavNews/Logo.png';
import './newsNav.css';
import { Navbar, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const NewsNav = ({ setCategory }) => {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg='danger' variant='dark'>
        <Navbar.Brand className='nav-brand'>
          <img
            src={Logo}
            alt='https://cdn-icons-png.flaticon.com/512/21/21601.png'
            width='100'
            height='100'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <ul className='nav-links'>
              {categories.map((category) => {
                const { id, name } = category;
                return (
                  <li key={id}>
                    <Button
                      variant='danger'
                      size='lg'
                      style={{
                        color: 'white',
                        fontSize: '25px',
                        fontWeight: '600',
                        borderRadius: '5px',
                      }}
                      onClick={() => setCategory(name)}
                    >
                      {name}
                    </Button>
                  </li>
                );
              })}
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NewsNav;
