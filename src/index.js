import React from 'react';
import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import rootReducer from './redux';
import App from './App';
import Books from './pages/Books';
import Categories from './pages/Categories';
import Header from './components/Header';
import './css/index.css';

const store = createStore(
  (state, action) => rootReducer(state, action), applyMiddleware(thunk),
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
