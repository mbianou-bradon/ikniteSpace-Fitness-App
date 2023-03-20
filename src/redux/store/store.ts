import { configureStore } from '@reduxjs/toolkit';
import { exerciseSlice } from '../features/exerciseSlice';
import workoutCategoriesSlice from '../features/workoutCategoriesSlice';

export const store = configureStore({
    reducer:{
        exercisereducer : exerciseSlice.reducer,
        workoutCategoriesreducer : workoutCategoriesSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;