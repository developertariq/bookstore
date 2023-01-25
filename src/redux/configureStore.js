import { combineReducers } from 'redux';
import bookReducer from './book/books';
import categoryReducer from './category/categories';

export default combineReducers({
  books: bookReducer,
  categories: categoryReducer,
});
