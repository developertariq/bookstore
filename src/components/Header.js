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
    padding: '10px 48px',
    boxShadow: '0 0 3px 0 #aaa9a9bf',
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
