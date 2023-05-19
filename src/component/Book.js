import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook, deleteOldBook } from '../redux/books/booksSlice';

function Book({ book }) {
  const disptach = useDispatch();

  const handleDelete = (item_id) => {
    disptach(deleteBook(item_id));
    disptach(deleteOldBook(item_id));
  };

  return (
    <div className="book">
      <h2>{book.title}</h2>
      <p>{book.category}</p>
      <p>{book.author}</p>
      <button type="submit" onClick={() => handleDelete(book.item_id)}>Delete</button>
    </div>
  );
}
Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
