/* redux */
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
  },
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.counter += action.payload;
    },
    decrement(state, action: PayloadAction<number>) {
      state.counter -= action.payload;
    },
    reset(state, action: PayloadAction<number>) {
      state.counter = action.payload;
    },
  },
});

export const counterReducer = counterSlice.reducer;
export const { increment, decrement, reset } = counterSlice.actions;
