import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import rootReducer from './redux/configureStore';
import App from './App';
import Books from './pages/Books';
import Categories from './pages/Categories';
import Header from './components/Header';
import { initialData } from './redux/books/books';
import './css/index.css';

const store = createStore(
  (state, action) => rootReducer(state, action), initialData,
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Books />} />
          </Route>
          <Route path="/Categories" element={<Categories />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
);
