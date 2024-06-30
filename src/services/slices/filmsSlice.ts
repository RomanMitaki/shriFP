import {createSlice} from "@reduxjs/toolkit";
import {TFilmsState} from "../../utils/types";

const initialState: TFilmsState = {
    films: [],
    isLoading: false,
    hasError: false,
    pages: 0,
    currentPage: 1,
    params: {
        title: '',
        genre: undefined,
        release_year: undefined,
        page: 1,
    },
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
        increasePage: (state) => {
            state.currentPage++;
            state.params.page++;
        },
        decreasePage: (state) => {
            state.currentPage--;
            state.params.page--;
        },
        setSearchTerm: (state, action) => {
            state.params.title = action.payload;

        },
        resetPage: (state) => {
            state.currentPage = 1;
            state.params.page = 1;
        },
    },
});

export const {
    getRequest,
    requestSuccessed,
    requestFailed,
    increasePage,
    decreasePage,
    setSearchTerm,
    resetPage,
} = filmsSlice.actions;
export default filmsSlice.reducer;
