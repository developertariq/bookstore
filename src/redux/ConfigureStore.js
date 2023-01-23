import createStore, { combineReducers } from 'redux';
import books from './books/Books';
import categories from './categories/Categories';

const rootReducer = combineReducers({
  books,
  categories,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
