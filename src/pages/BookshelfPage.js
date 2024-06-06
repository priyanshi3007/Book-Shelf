// src/pages/BookshelfPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from '../components/Bookshelf';

const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    setBookshelf(JSON.parse(localStorage.getItem('bookshelf')) || []);
  }, []);

  return (
    <div>
      <h1>My Bookshelf</h1>
      <Bookshelf books={bookshelf} />
      <Link to="/">Back to Search</Link>
    </div>
  );
};

export default BookshelfPage;
