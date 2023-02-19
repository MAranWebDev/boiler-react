/* redux */
import { configureStore } from '@reduxjs/toolkit';

/* features */
import { counterReducer } from '../../features/counter';

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export { type RootState, type AppDispatch, store };
