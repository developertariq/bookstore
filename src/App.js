import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/ConfigureStore';

import Books from './pages/Books';
import './css/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Provider store={store}>
          <Books />
        </Provider>
      </div>
    );
  }
}

export default App;
