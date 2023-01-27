import React from 'react';
import { FaUser } from 'react-icons/fa';
import Navbar from './Navbar';

const Header = () => (
  <header data-testid="header">
    <h1 className="title">
      Bookstore CMS
    </h1>
    <Navbar />
    <button className="user-button" type="button">
      <FaUser style={{ color: '#ee6723', fontSize: '20px' }} />
    </button>
  </header>
);

export default Header;
