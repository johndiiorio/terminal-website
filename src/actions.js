let nextLineId = 0;

export const ADD_LINE = 'ADD_LINE';
export const UPDATE_SELECTED_LINE = 'UPDATE_SELECTED_LINE';
export const UPDATE_LINE_INPUT = 'UPDATE_LINE_INPUT';
export const UPDATE_LINE_OUTPUT = 'UPDATE_LINE_OUTPUT';
export const UPDATE_NUM_BACK_IN_COMMAND_HISTORY = 'UPDATE_NUM_BACK_IN_COMMAND_HISTORY';
export const CLEAR_LINES = 'CLEAR_LINES';
export const ADD_COMMAND_TO_HISTORY = 'ADD_COMMAND_TO_HISTORY';

export const addLine = path => ({
	type: ADD_LINE,
	id: nextLineId++,
	path,
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

export const updateNumBackInCommandHistory = (id, numBackInCommandHistory) => ({
	type: UPDATE_NUM_BACK_IN_COMMAND_HISTORY,
	id,
	numBackInCommandHistory,
});

export const clearLines = () => ({
	type: CLEAR_LINES,
});

export const addCommandToHistory = command => ({
	type: ADD_COMMAND_TO_HISTORY,
	command,
});
