import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ReadingProgress from './ReadingProgress';
import ReadingStatus from './ReadingStatus';
import styles from '../css/Book.module.css';
import { removeBook } from '../redux/book/books';

const Book = (props) => {
  const dispatch = useDispatch();

  const { book } = props;
  const {
    id, title, author,
  } = book;

  return (
    <li className={styles.item}>
      <div className={styles.book}>
        <div>
          <h2>{title}</h2>
          <p>{author}</p>
          <button type="button" onClick={() => { dispatch(removeBook(id)); }}>Remove</button>
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
    }),
  ),
};

Book.defaultProps = {
  book: PropTypes.objectOf(
    PropTypes.shape({}),
  ),
};

export default Book;
