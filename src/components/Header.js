import React from 'react';
import SiteTitle from './SiteTitle';
import Navbar from './Navbar';
import User from './User';

const Header = () => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '4px 90px',
    boxShadow: '0 10px 10px 5px #aaa9a9bf',
    border: '1px solid #e6e3e3bf',
  };

  return (
    <header data-testid="header" style={headerStyle}>
      <SiteTitle />
      <Navbar />
      <User />
    </header>
  );
};

export default Header;
