import React from 'react';

const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

export function checkStatus(category) {
  return { type: CHECK_STATUS, category };
}

const initialState = {
  categories: [],
};

export default function categories(state = initialState, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return { ...state, categories: action.categories };
    default:
      return state;
  }
}

export const Categories = () => (
  <div className="container">
    <button type="button">Check status</button>
  </div>
);
