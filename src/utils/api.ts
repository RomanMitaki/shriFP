import {TGetAllFilmResponse, TParams} from "./types.ts";
import {buildQueryString} from "./buildQueryString.ts";

export const getFilms = async (params: TParams) => {
    try {
        const query = buildQueryString(params);
        console.log(query, `http://localhost:3030/api/v1/search${query}`)
        const response = await fetch(`http://localhost:3030/api/v1/search${query}`);
        if (!response.ok) {
            throw new Error(
                `Network response was not ok, status: ${response.status}`,
            );
        }
        const result: TGetAllFilmResponse = await response.json();
        return result;
    } catch (error) {
        console.error("An error occurred:", error);
    }
};




