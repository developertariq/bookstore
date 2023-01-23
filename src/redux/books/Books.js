import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BookList from '../../components/BookList';
import AddBook from '../../components/AddBook';

const Books = () => {
  const initState = [
    {
      id: 1,
      title: 'Romeo & Juliet',
      author: 'Shakespear',
      category: 'Fiction',
    },
    {
      id: 1,
      title: 'Romeo & Juliet',
      author: 'Shakespear',
      category: 'Fiction',
    },
    {
      id: 1,
      title: 'Romeo & Juliet',
      author: 'Shakespear',
      category: 'Fiction',
    },
  ];

  const [books, setBooks] = useState(initState);
  const addNewBook = (title, category) => {
    const newBook = {
      id: uuidv4(),
      title,
      category,
    };
    setBooks([...books, newBook]);
  };
  return (
    <div className="container">
      <BookList books={books} />
      <AddBook addNewBookProps={addNewBook} />
    </div>
  );
};

export default Books;
