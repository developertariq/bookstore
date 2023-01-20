import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddBook = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
    author: '',
  });

  const handleChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { addNewBookProps } = props;
    if (inputText.title.trim() && inputText.author.trim()) {
      addNewBookProps(inputText.title, inputText.author);
      setInputText({
        title: '',
        author: '',
      });
    } else {
      // eslint-disable-next-line
      alert('Please write book title and author name!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>
        Add New Book
      </h2>
      <input
        type="text"
        className="input-text"
        placeholder="Book title"
        value={inputText.title}
        name="title"
        onChange={handleChange}
      />
      <input
        type="text"
        className="input-text"
        placeholder="Author"
        value={inputText.author}
        name="author"
        onChange={handleChange}
      />
      <button type="submit" className="input-submit">
        Add Book
      </button>
    </form>
  );
};

AddBook.propTypes = {
  addNewBookProps: PropTypes.func.isRequired,
};

export default AddBook;
