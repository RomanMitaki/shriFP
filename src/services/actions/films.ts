import { getAllFilms } from "../../utils/api";
import { AppDispatch } from "../../utils/types";
import {
  getRequest,
  requestFailed,
  requestSuccessed,
} from "../slices/filmsSlice.ts";

export const renderAllFilms = (page: number) => async (dispatch: AppDispatch) => {
  dispatch(getRequest());
  try {
    const res = await getAllFilms(page);
    dispatch(requestSuccessed(res));
  } catch (error) {
    dispatch(requestFailed());
  }
};

