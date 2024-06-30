import {getFilms} from "../../utils/api";
import {AppDispatch, TParams} from "../../utils/types";
import {
  getRequest,
  requestFailed,
  requestSuccessed,
} from "../slices/filmsSlice.ts";

export const renderFilms = (params: TParams) => async (dispatch: AppDispatch) => {
  dispatch(getRequest());
  try {
    const res = await getFilms(params);
    dispatch(requestSuccessed(res));
  } catch (error) {
    dispatch(requestFailed());
  }
};


