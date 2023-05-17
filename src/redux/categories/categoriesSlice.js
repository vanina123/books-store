import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory(state, action) {
      state.categories.push(action.payload);
    },
    deleteCategory(state, action) {
      const index = state.categories.findIndex((category) => category.id === action.payload.id);
      state.categories.splice(index, 1);
    },
  },
});

export const { addCategory, deleteCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
