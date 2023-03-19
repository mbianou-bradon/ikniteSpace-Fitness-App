import { configureStore } from '@reduxjs/toolkit';
import { exerciseSlice } from '../features/exerciseSlice';

export const store = configureStore({
    reducer:{
        exercisereducer : exerciseSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;