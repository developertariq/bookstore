import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from './redux/books/books';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      dispatch(addBook({ id: uuidv4(), title, author }));
      setTitle('');
      setAuthor('');
    } else {
      // eslint-disable-next-line
      alert('Please write book title and author name!');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>
        Add New Book
      </h2>
      <input
        type="text"
        className="input-text"
        placeholder="Book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        className="input-text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit" className="input-submit">
        Add Book
      </button>
    </form>
  );
};

export default connect()(AddBook);
