import { combineReducers } from 'redux';
import bookReducer from './book/books';
import categoryReducer from './category/categories';
import reducer from './book/fetchBooks';
import addBookReducer from './book/addBooks';
import removeBookReducer from './book/removeBooks';

export default combineReducers({
  books: bookReducer,
  categories: categoryReducer,
  api: reducer,
  addBook: addBookReducer,
  removeBook: removeBookReducer,
});
