import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
import { exerciseData } from "../../data/exerciseData";
import { exerciseType } from "../../../dataTypes";

const initialState : { exerciseData: exerciseType[]} = {
    exerciseData: []
};

export const exerciseSlice = createSlice({
    name: "exerciseData",
    initialState,
    reducers: {},
})

export const {} = exerciseSlice.actions;
export default exerciseSlice.reducer
