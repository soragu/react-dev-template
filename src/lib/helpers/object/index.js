export function update(prev, values) {
    return Object.assign({}, prev, values);
}

export function cleanEmptyValues(obj) {
    const newObj = Object.assign({}, obj);
    for (let key in newObj) {
        if (!newObj[key]) {
            delete newObj[key];
        }
    }
    return newObj;
}