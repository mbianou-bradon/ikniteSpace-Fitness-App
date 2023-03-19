import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from '../features/createTodoSlice';

export const store = configureStore({
    reducer:{
        todoreducer : todoSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;