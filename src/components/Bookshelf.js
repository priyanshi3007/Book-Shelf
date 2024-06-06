// src/components/Bookshelf.js
import React from 'react';

const Bookshelf = ({ books }) => {
  return (
    <div>
      <h2>My Bookshelf</h2>
      <div className="bookshelf">
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <h3>{book.title}</h3>
            <p>{book.author_name && book.author_name.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
