let nextLineId = 0;
export const addLine = () => ({
    type: 'ADD_LINE',
    id: nextLineId++,
});
export const disableLine = (id) => ({
    type: 'DISABLE_LINE',
    id
});