import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categories.status, shallowEqual);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2>{status}</h2>
      <button type="button" onClick={() => { dispatch(checkStatus('Under Construction')); }}>Check status</button>
    </div>
  );
};

export default Categories;
