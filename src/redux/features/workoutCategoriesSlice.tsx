import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
import { exerciseData } from "../../../data";

const initialState = exerciseData;

export const workoutCategoriesSlice = createSlice({
    name: "workoutCategoriesData",
    initialState,
    reducers: {},
})

export const {} = workoutCategoriesSlice.actions;
export default workoutCategoriesSlice.reducer