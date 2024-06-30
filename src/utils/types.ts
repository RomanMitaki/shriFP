import { ActionCreator, AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { store } from "../services/store";

type TActor = {
  name: string;
  photo: string; // base64 img
}

export type TFilm = {
  id: string;
  title: string;
  description: string;
  release_year: number;
  poster: string; //base64 img
  genre: string;
  rating: string; //float
  total_rates_count: string; //int
  actors: TActor[];
};

type ShortMovieInfo = Omit<TFilm, "actors" | "total_rates_count">;

export type TGetAllFilmResponse = {
  search_result: ShortMovieInfo[],
  total_pages: number
};

export type TFilmsState = {
  films: TGetAllFilmResponse["search_result"];
  isLoading: boolean;
  pages: number;
  currentPage: number;
  hasError: boolean;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, RootState, unknown, AnyAction>
>;
export type AppDispatch = typeof store.dispatch;
