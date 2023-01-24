import React, { useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import BookList from '../components/BookList';
import AddBook from '../components/AddBook';

const Books = () => {
  const [setBooks] = useState([]);

  const books = useSelector((state) => state.books, shallowEqual);
  const removeBook = (id) => {
    setBooks([
      ...books.filter((book) => book.id !== id),
    ]);
  };

  return (
    <div className="container">
      <BookList
        books={books}
        removeBookProps={removeBook}
      />
      <AddBook />
    </div>
  );
};

export default Books;
