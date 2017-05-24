import { getRandomNumber } from 'Fixtures/helpers/number';

export const item = {
    id: 1,
    name: 'Javasrcipt Hand Book',
    stock: 1,
};

export const collection = [{
    id: 1,
    name: 'Javasrcipt Hand Book',
    stock: 2,
}, {
    id: 2,
    name: 'React Hand Book',
    stock: 2,
}, {
    id: 3,
    name: 'Redux Hand Book',
    stock: 0,
}, {
    id: 4,
    name: 'Front-end Hand Book',
    stock: 0,
}, {
    id: 5,
    name: 'CSS Hand Book',
    stock: 0,
}];

export const createCollection = (length) => {
    const items = [];
    for (let i = 0; i < length; i++) {
        items.push({
            id: i + 1,
            name: `Book Item #${i+1}`,
            stock: getRandomNumber(0, 10)
        });
    }
    return items;
}
