const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export function addBook(book) {
  return { type: ADD_BOOK, book };
}

export function removeBook(book) {
  return { type: REMOVE_BOOK, book };
}

export const initialState = {
  books: [
    {
      id: 1,
      title: '',
      author: '',
    },
    {
      id: 2,
      title: '',
      author: '',
    },
    {
      id: 3,
      title: '',
      author: '',
    },
  ],
};

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, books: action.books };
    case REMOVE_BOOK:
      return { ...state, books: state.books.filter((book) => book !== action.book) };
    default:
      return state;
  }
}
