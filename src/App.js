import React from 'react';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import rootReducer from './redux';
import Books from './pages/Books';
import './css/App.css';
// import { initialData } from './redux/books/books';

// const store = createStore(
//   (state, action) => rootReducer(state, action), initialData,
// );
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {/* <Provider store={store}> */}
        <Books />
        {/* </Provider> */}
      </div>
    );
  }
}

export default App;
