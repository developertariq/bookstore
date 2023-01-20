import React from 'react';
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
        <Books />
      </div>
    );
  }
}

export default App;
