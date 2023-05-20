import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const bookstoreApiURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ttuM6pXLJa0eKncuO2Y2/books';
const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
  isLoading: false,
  error: undefined,
};
const fetchBooks = createAsyncThunk('book/fetchBooks', async () => {
  const response = await axios.get(bookstoreApiURL);
  return response.data;
});
const addNewBook = createAsyncThunk('book/addNewBook', async (bookData) => {
  const response = await axios.post(bookstoreApiURL, bookData);
  return response.data;
});
const deleteOldBook = createAsyncThunk('book/deleteBook', async (bookId) => {
  await axios.delete(`${bookstoreApiURL}/${bookId}`);
  return bookId;
});
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books.push({
        item_id: payload.item_id,
        title: payload.title,
        author: payload.author,
        category: payload.category,
      });
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter(
        (book) => book.item_id !== action.payload,
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, { payload }) => {
        state.books = Object.entries(payload).flatMap(([key, value]) => value.map((book) => ({
          ...book,
          item_id: key,
          progress: 80,
        })));
      })
      .addCase(fetchBooks.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addNewBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNewBook.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addNewBook.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteOldBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteOldBook.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.books = state.books.filter((book) => book.item_id !== payload);
      })
      .addCase(deleteOldBook.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { actions: booksActions } = booksSlice;
export const { addBook, deleteBook } = booksSlice.actions;
export { fetchBooks, addNewBook, deleteOldBook };
export default booksSlice.reducer;
