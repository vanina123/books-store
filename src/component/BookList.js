import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { fetchBooks } from '../redux/books/booksSlice';

const BookList = () => {
  const { books, isLoading, error } = useSelector((state) => state.books);

  const disptach = useDispatch();
  useEffect(() => {
    disptach(fetchBooks());
  }, []);
  if (!Array.isArray(books)) {
    return null;
  }
  if (isLoading) {
    return <p>please wait books are loading...</p>;
  }
  if (error) {
    return <p>Error cant find book</p>;
  }

  return (
    <div className="book-list">
      {books.map((book) => (
        <Book
          key={book.item_id}
          book={book}
        />
      ))}
    </div>

  );
};

export default BookList;
