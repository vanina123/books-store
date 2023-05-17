import { createStore, combineReducers } from '@reduxjs/toolkit';

import booksSlice from './books/booksSlice';
import categoriesSlice from './categories/categoriesSlice';

const rootReducer = combineReducers({
  books: booksSlice.reducer,
  categories: categoriesSlice.reducer,
});

const store = createStore(rootReducer);

export default store;
