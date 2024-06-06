// src/components/BookSearch.js
import React, { useState } from 'react';

const BookSearch = ({ addToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchBooks = async (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 2) {
      const response = await fetch(`https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`);
      const data = await response.json();
      setResults(data.docs);
    } else {
      setResults([]);
    }
  };

  return (
    <div>
      <h1>Search by book name:</h1>
      <input type="text" value={query} onChange={searchBooks} placeholder="Type a book name" />
      <div className="search-results">
        {results.map((book, index) => (
          <div key={index} className="book-card">
            <h3>Book Title: {book.title}</h3>
            <p>Edition Count: {book.edition_count}</p>
            <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
