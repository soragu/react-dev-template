/* actions type */
export const SQUARE_ROOT = 'SQUARE_ROOT';

/* actions creator */
export function determineSqrt(text) {
    return {
        type: SQUARE_ROOT,
        payload: parseInt(text)
    };
}
