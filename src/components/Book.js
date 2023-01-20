import React from 'react';
import PropTypes from 'prop-types';
import ReadingProgress from './ReadingProgress';
import ReadingStatus from './ReadingStatus';
import '../css/Book.module.css';

const Book = (props) => {
  const { book } = props;
  const {
    id, title, author, category,
  } = book;

  return (
    <li className="item">
      <div className="item">
        <div>
          <h4>{category}</h4>
          <h2>{title}</h2>
          <p>{author}</p>
          <ul>
            <li>Comments</li>
            <li>Remove</li>
            <li>Edit</li>
          </ul>
        </div>
        <div>
          <ReadingProgress id={id} />
        </div>
        <div>
          <ReadingStatus id={id} />
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      category: PropTypes.string,
    }),
  ),
};

Book.defaultProps = {
  book: PropTypes.objectOf(
    PropTypes.shape({}),
  ),
};

export default Book;
