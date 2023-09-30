// const filteredContacts = () => {
//   return contacts.filter(({ name }) =>
//     name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
//   );
// };

import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterChange(state, action) {
      return action.payload;
    },
  },
});

export const { filterChange } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
