import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BookList from '../../components/BookList';
import AddBook from '../../components/AddBook';

const ADD = 'ADD';
const REMOVE = 'REMOVE';

export function createWidget(book) {
  return { type: ADD, book };
}

export function removeWidget(book) {
  return { type: REMOVE, book };
}

const initialState = {
  books: [],
};

export default function books(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return { ...state, books: action.books };
    case REMOVE:
      return { ...state, books: action.books };
    default:
      return state;
  }
}

export const Books = () => {
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
