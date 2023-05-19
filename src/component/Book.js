import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook, deleteOldBook } from '../redux/books/booksSlice';
import styles from '../styles/book.module.css';

function Book({ book }) {
  const disptach = useDispatch();

  const handleDelete = (item_id) => {
    disptach(deleteBook(item_id));
    disptach(deleteOldBook(item_id));
  };

  return (
    <div className={styles.book}>
      <div className={styles.details}>
        <div className={styles.bookinfo}>
          <p className={styles.bookcat}>{book.category}</p>
          <h2 className={styles.bookt}>{book.title}</h2>
          <p className={styles.bookau}>{book.author}</p>
          <div className={styles.small}>
            <button className={styles.outline} type="button">
              Comment
            </button>
            <div className={styles.divider} />
            <button
              className={styles.outline}
              type="submit"
              onClick={() => handleDelete(book.item_id)}
            >
              Remove
            </button>
            <div className={styles.divider} />
            <button className={styles.outline} type="button">
              Edit
            </button>
          </div>
        </div>
        <div className={styles.progress}>
          <div className={styles.progressCir}>
            <div className={styles.pro} />
          </div>
          <div>
            <p className={styles.proCir}>60%</p>
            <p className={styles.complete}>Completed</p>
          </div>
          <div className={styles.prodiv} />

          <div className={styles.chapter}>
            <p className={styles.cur}>Current Chapter</p>
            <p className={styles.current}>Chapter 17</p>
            <button className={styles.updateBtn} type="button">
              UPDATE PROGRESS
            </button>
          </div>
        </div>
      </div>
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
