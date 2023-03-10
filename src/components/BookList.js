import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = (props) => {
  const { books, removeBookProps } = props;

  return (
    <ul style={{ paddingBottom: '8px' }}>
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
  removeBookProps: PropTypes.func,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
    }),
  ),
};

BookList.defaultProps = {
  removeBookProps: PropTypes.func,
  books: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
};

export default BookList;
