import React, { useState } from 'react';

const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

export function checkStatus(category) {
  return { type: CHECK_STATUS, category };
}

const initialState = {
  categories: [],
  status: '',
};

export default function categories(state = initialState, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return { ...state, categories: action.categories, status: 'Under construction' };
    default:
      return state;
  }
}

export const Categories = () => {
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
