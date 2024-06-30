import {TGetAllFilmResponse} from "./types.ts";

export const getAllFilms = async () => {
    try {
        const response = await fetch("http://localhost:3030/api/v1/search");
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

