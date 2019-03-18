let nextLineId = 0;

export const ADD_LINE = 'ADD_LINE';
export const UPDATE_SELECTED_LINE = 'UPDATE_SELECTED_LINE';
export const UPDATE_LINE_INPUT = 'UPDATE_LINE_INPUT';
export const UPDATE_LINE_OUTPUT = 'UPDATE_LINE_OUTPUT';
export const CLEAR_LINES = 'CLEAR_LINES';

export const addLine = () => ({
	type: ADD_LINE,
	id: nextLineId++,
});

export const updateSelectedLine = id => ({
	type: UPDATE_SELECTED_LINE,
	id,
});

export const updateLineInput = (id, inputText) => ({
	type: UPDATE_LINE_INPUT,
	id,
	inputText,
});

export const updateLineOutput = (id, output) => ({
	type: UPDATE_LINE_OUTPUT,
	id,
	output,
});

export const clearLines = () => ({
	type: CLEAR_LINES,
});
