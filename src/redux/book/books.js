const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export function addBook(book) {
  return { type: ADD_BOOK, book };
}

export function removeBook(id) {
  return { type: REMOVE_BOOK, id };
}

export const initialData = [
  {
    id: 1,
    title: 'Mrityukhudha',
    author: 'Kazi Nazrul Islam',
  },
  {
    id: 2,
    title: 'Harry Potter',
    author: 'J. K. Rowling',
  },
  {
    id: 3,
    title: 'The Lord of the Rings',
    author: 'J. R. R. Tolkien',
  },
];

export default function bookReducer(state = initialData, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}
