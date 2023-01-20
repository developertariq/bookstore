import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Books from './pages/Books';
import Categories from './pages/Categories';
import Header from './components/Header';
import './css/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Books />} />
        </Route>
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
