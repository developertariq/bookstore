import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import styles from '../css/Book.module.css';
import { removeBooks } from '../redux/book/removeBooks';
import 'react-circular-progressbar/dist/styles.css';

const Book = (props) => {
  const dispatch = useDispatch();
  const { book } = props;
  const {
    id, title, author, category,
  } = book;
  const percentage = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  const chapter = Math.floor((Math.random() * Math.floor((percentage / 5)))) + 1;

  return (
    <li className={styles.item}>
      <div className={styles.bookContainer}>
        <div style={{ width: '45%' }}>
          <h4
            style={{
              fontFamily: 'Lato, sans-serif',
              margin: '0',
              color: '#979197',
            }}
          >
            {category}
          </h4>
          <h2 style={{ margin: '4px 0', padding: '0' }}>{title}</h2>
          <p style={{ color: '#419bf9', margin: '0' }}>{author}</p>
          <button className={styles.bookButton} type="button" onClick={() => { dispatch(removeBooks(id)); }}>Remove</button>
        </div>
        <div className={styles.progressStyle}>
          <div style={{ width: 80, height: 80 }}>
            <CircularProgressbar value={percentage} />
          </div>
          <div>
            <h2>{`${percentage}%`}</h2>
            <h4 style={{ color: '#979197' }}>Completed</h4>
          </div>
        </div>
        <div
          style={{
            margin: 'auto 24px',
            width: '0',
            height: '60px',
            border: '1px solid #beaabe',
          }}
        />
        <div className={styles.readingStyle}>
          <p
            style={{
              color: '#979197',
              fontSize: '18px',
              margin: '0',
            }}
          >
            Current Chapter
          </p>
          <p style={{ fontSize: '20px', margin: '8px 0' }}>
            Chapter:
            {`${chapter}`}
          </p>
          <button className={styles.bookButton} type="button">Update Progress</button>
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
