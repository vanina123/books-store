import React from 'react';
import Book from './Book';

const BookList = ({ books, onDelete }) => (
  <div className="book-list">
    {books.map((book) => (
      <Book
        key={book.id}
        title={book.title}
        category={book.category}
        author={book.author}
        onDelete={() => onDelete(book.id)}
      />
    ))}
  </div>
);

export default BookList;
