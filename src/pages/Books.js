import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import BookList from '../components/BookList';
import AddBook from '../components/AddBook';

const Books = () => {
  const [setBooks] = useState([]);

  const books = useSelector((state) => state.books);
  const removeBook = (id) => {
    setBooks([
      ...books.filter((book) => book.id !== id),
    ]);
  };

  const addNewBook = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    setBooks([...books, newBook]);
  };
  return (
    <div className="container">
      <BookList
        books={books}
        removeBookProps={removeBook}
      />
      <AddBook addNewBookProps={addNewBook} />
    </div>
  );
};

export default Books;
