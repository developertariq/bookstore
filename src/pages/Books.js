import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import BookList from '../components/BookList';
import AddBook from '../components/AddBook';

const Books = () => {
  const books = useSelector((state) => state.books, shallowEqual);

  return (
    <div className="container">
      <BookList books={books} />
      <AddBook />
    </div>
  );
};

export default Books;
