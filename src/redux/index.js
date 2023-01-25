import { combineReducers } from 'redux';
import bookReducer from './book/books';
import categoryReducer from './category/categories';
import reducer from './book/fetchBooks';

export default combineReducers({
  books: bookReducer,
  categories: categoryReducer,
  api: reducer,
});
