import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ReadingProgress from './ReadingProgress';
import ReadingStatus from './ReadingStatus';
import styles from '../css/Book.module.css';
import { removeBooks } from '../redux/book/removeBooks';

const Book = (props) => {
  const dispatch = useDispatch();
  const { book } = props;
  const {
    id, title, author, category,
  } = book;

  return (
    <li className={styles.item}>
      <div className={styles.book}>
        <div>
          <h4>{category}</h4>
          <h2>{title}</h2>
          <p>{author}</p>
          <button type="button" onClick={() => { dispatch(removeBooks(id)); }}>Remove</button>
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
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      category: PropTypes.string,
    }),
  ),
};

export default Book;
