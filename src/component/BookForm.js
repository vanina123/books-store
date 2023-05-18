import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const BookForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const disptach = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && category && author) {
      disptach(
        addBook({
          item_id: Math.random().toString(),
          title,
          category,
          author,
        }),
      );
      onAdd(addBook);
      setTitle('');
      setCategory('');
      setAuthor('');
    }
  };

  return (
    <div className="book-form">
      <h1>ADD NEW BOOK</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default BookForm;
