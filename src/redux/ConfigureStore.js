import { createStore, combineReducers } from 'redux';
import bookReducer, { initialData } from './books/books';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({
  books: bookReducer,
  categories: categoryReducer,
});

export default createStore(
  (state, action) => rootReducer(state, action), initialData,
);
