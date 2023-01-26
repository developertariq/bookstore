import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/book/fetchBooks';
import BookList from '../components/BookList';
import AddBook from '../components/AddBook';

const Books = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.api);
  const books = [];

  Object.entries(data).forEach(([key, value]) => {
    const book = value[0];
    const id = { id: key };
    books.push({ ...book, ...id });
  });

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="container">
      <BookList books={books} />
      <AddBook />
    </div>
  );
};

export default Books;
