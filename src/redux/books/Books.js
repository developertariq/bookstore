import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BookList from '../../components/BookList';
import AddBook from '../../components/AddBook';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export function addBook(book) {
  return { type: ADD_BOOK, book };
}

export function removeBook(book) {
  return { type: REMOVE_BOOK, book };
}

const initialState = {
  books: [],
};

export default function books(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, books: action.books };
    case REMOVE_BOOK:
      return { ...state, books: state.books.filter((book) => book !== action.book) };
    default:
      return state;
  }
}

export const Books = () => {
  const initState = [];

  const [books, setBooks] = useState(initState);
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
