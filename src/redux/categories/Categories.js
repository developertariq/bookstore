const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

export function checkStatus(category) {
  return { type: CHECK_STATUS, category };
}

const initialState = {
  categories: [],
  status: '',
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return { ...state, categories: action.categories, status: 'Under construction' };
    default:
      return state;
  }
}
