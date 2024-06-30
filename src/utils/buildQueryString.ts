import {TParams} from './types';

export function buildQueryString(params: TParams): string {
    const queryParams = [];

    for (const key in params) {
        if (params[key] !== '' && params[key] !== undefined) {
            if (key === 'page') {
                queryParams.push(`${key}=${params[key]}`);
            } else {
                queryParams.push(`${key}=${params[key]}`);
            }
        }
    }

    if (queryParams.length > 0) {
        return `?${queryParams.join('&')}`;
    }

    return '';
}


