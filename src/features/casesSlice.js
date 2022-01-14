import { createSlice } from '@reduxjs/toolkit';

export const casesSlice = createSlice({
  name: 'casesShown',
  initialState: {
    value: true,
  },
  reducers: {
    setDefault: (state) => {
      state.value = true;
    },
    setCasesShown: (state) => {
      state.value = !state.value;
    },
  },
});

export const { setDefault, setCasesShown } = casesSlice.actions;
export default casesSlice.reducer;
