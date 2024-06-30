import {TParams} from "./types.ts";

export function isSameParams(params1: TParams, params2: TParams): boolean {
    for (const key in params1) {
        if (key !== 'page' && params1[key] !== params2[key]) {
            return true;
        }
    }
    return false;
}

