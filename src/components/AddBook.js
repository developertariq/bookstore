import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/book/books';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim() && category.trim()) {
      dispatch(addBook({
        id: uuidv4(),
        title,
        author,
        category,
      }));
      setTitle('');
      setAuthor('');
      setCategory('');
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
      <select
        className="input-text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Fiction">Fiction</option>
        <option value="Novel">Novel</option>
        <option value="Science-Fiction">Science-Fiction</option>
        <option value="Economy">Economy</option>
      </select>
      <button type="submit" className="input-submit">
        Add Book
      </button>
    </form>
  );
};

export default connect()(AddBook);
