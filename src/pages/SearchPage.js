// src/pages/SearchPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookSearch from '../components/BookSearch';


const SearchPage = () => {
  const [bookshelf, setBookshelf] = useState(JSON.parse(localStorage.getItem('bookshelf')) || []);

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div>
      <BookSearch addToBookshelf={addToBookshelf} />
      <Link to="/bookshelf">My Bookshelf</Link>
    </div>
  );
};

export default SearchPage;
