export function select(source = [], condition = {}) {
    const result = source.filter((item) => {
        const keys = Object.keys(condition);
        return keys.every((key) => {
            return item[key] === condition[key];
        });
    });
    return result;
}