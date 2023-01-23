import React from 'react';

const STATUS = 'STATUS';

export function createWidget(category) {
  return { type: STATUS, category };
}

const initialState = {
  categories: [],
};

export default function categories(state = initialState, action) {
  switch (action.type) {
    case STATUS:
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
