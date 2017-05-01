export function createReducer(initialState, handlers) {
    return function reducer(state = initialState, { type, payload }) {
        if (handlers.hasOwnProperty(type)) {
            return handlers[type](state, payload);
        } else {
            return state;
        }
    }
}
