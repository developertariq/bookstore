import React, { useState } from 'react';

const Categories = () => {
  const [status, setStatus] = useState('');

  const updateStatus = () => {
    setStatus(['Under Construction']);
  };

  return (
    <div className="container">
      <h2>{status}</h2>
      <button type="button" onClick={updateStatus}>Check status</button>
    </div>
  );
};

export default Categories;
