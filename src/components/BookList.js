import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = (props) => {
  const { books, removeBookProps } = props;
  return (
    <ul>
      {books.map((book) => (
        <Book
          key={book.id}
          book={book}
          removeBookProps={removeBookProps}
        />
      ))}
    </ul>
  );
};

BookList.propTypes = {
  removeBookProps: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
    }),
  ),
};

BookList.defaultProps = {
  books: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
};

export default BookList;
