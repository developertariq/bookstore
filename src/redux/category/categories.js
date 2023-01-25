const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

export function checkStatus(status) {
  return { type: CHECK_STATUS, status };
}

const initialState = {
  status: '',
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
}
