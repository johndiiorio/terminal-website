import * as actions from './actions';

const newLine = {
	inputText: '',
	output: '',
	path: '/home/johndiiorio/',
	active: true,
};

const initialState = {
	lines: [newLine],
	selectedLine: 0,
};

export default function terminalApp(state = initialState, action) {
	switch (action.type) {
		case actions.ADD_LINE:
			return {
				...state,
				lines: state.lines.map(line => ({
					...line,
					active: false,
				})).concat(newLine),
				selectedLine: state.lines.length,
			};
		case actions.UPDATE_SELECTED_LINE:
			return {
				...state,
				selectedLine: action.id,
			};
		case actions.UPDATE_LINE_INPUT:
			return {
				...state,
				lines: state.lines.map((line, index) => ({
					...line,
					inputText: action.id === index ? action.inputText : line.inputText,
				})),
			};
		case actions.UPDATE_LINE_OUTPUT:
			return {
				...state,
				lines: state.lines.map((line, index) => ({
					...line,
					output: action.id === index ? action.output : line.output,
				})),
			};
		case actions.CLEAR_LINES:
			return {
				...state,
				lines: [{
					...newLine,
					path: state.lines[state.selectedLine].path,
				}],
				selectedLine: 0,
			};
		default:
			return state;
	}
}
