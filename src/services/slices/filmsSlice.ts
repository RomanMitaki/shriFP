import {createSlice} from "@reduxjs/toolkit";
import {TFilmsState} from "../../utils/types";

const initialState: TFilmsState = {
    films: [],
    isLoading: false,
    hasError: false,
    pages: 0,
};

export const filmsSlice = createSlice({
    name: "films",
    initialState,
    reducers: {
        getRequest: (state) => {
            state.isLoading = true;
        },
        requestSuccessed: (state, action) => {
            state.isLoading = false;
            state.films = action.payload.search_result;
            state.pages = action.payload.total_pages;
        },
        requestFailed: (state) => {
            state.isLoading = false;
            state.hasError = true;
        },
    },
});

export const {
    getRequest,
    requestSuccessed,
    requestFailed,
} = filmsSlice.actions;
export default filmsSlice.reducer;
