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
