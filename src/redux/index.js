import { combineReducers } from 'redux';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

export default combineReducers({
  books: bookReducer,
  categories: categoryReducer,
});
