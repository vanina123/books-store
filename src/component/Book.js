import React from 'react';

const Book = ({
  title, category, author, onDelete,
}) => (
  <div className="book">
    <h2>{title}</h2>
    <p>{category}</p>
    <p>{author}</p>
    <button type="button" onClick={onDelete}>Delete</button>
  </div>
);

export default Book;
