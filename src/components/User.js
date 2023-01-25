import React from 'react';
import { FaUser } from 'react-icons/fa';

const User = () => (
  <button
    style={{
      background: '#f1f3f4',
      border: 'none',
      cursor: 'pointer',
      float: 'right',
      outline: 'none',
      borderRadius: '100px',
      height: '50px',
      width: '50px',
      margin: '-10px 0 0 10px',
    }}
    type="button"
  >
    <FaUser style={{ color: 'orangered', fontSize: '20px' }} />
  </button>
);

export default User;
