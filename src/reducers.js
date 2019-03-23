import * as actions from './actions';
import { HOME_PATH } from './constants';

const newLine = {
	inputText: '',
	output: '',
	path: HOME_PATH,
	numBackInCommandHistory: 0,
};

const initialState = {
	lines: [newLine],
	selectedLine: 0,
	commandHistory: [],
};

export default function terminalApp(state = initialState, action) {
	switch (action.type) {
		case actions.ADD_LINE:
			return {
				...state,
				lines: state.lines.concat({
					...newLine,
					path: action.path || state.lines[state.selectedLine].path,
				}),
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
		case actions.UPDATE_NUM_BACK_IN_COMMAND_HISTORY: {
			return {
				...state,
				lines: state.lines.map((line, index) => {
					if (action.id !== index) {
						return line;
					}
					let numBackInCommandHistory = action.numBackInCommandHistory;
					if (numBackInCommandHistory < 0) {
						numBackInCommandHistory = 0;
					}
					if (numBackInCommandHistory > state.commandHistory.length) {
						numBackInCommandHistory = state.commandHistory.length;
					}
					let inputText = line.inputText;
					if (numBackInCommandHistory === 0) {
						inputText = '';
					} else {
						inputText = state.commandHistory[state.commandHistory.length - numBackInCommandHistory];
					}
					return {
						...line,
						numBackInCommandHistory,
						inputText,
					};
				}),
			};
		}
		case actions.CLEAR_LINES:
			return {
				...state,
				lines: [{
					...newLine,
					path: state.lines[state.selectedLine].path,
				}],
				selectedLine: 0,
			};
		case actions.ADD_COMMAND_TO_HISTORY:
			return {
				...state,
				commandHistory: state.commandHistory.concat(action.command),
			};
		default:
			return state;
	}
}
