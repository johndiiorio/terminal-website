import * as commands from './commands';

function getCommandInfo(str) {
	const commandArr = str.split(' ');
	const command = commandArr.shift().toLowerCase();
	let flags = [];
	const commandInfo = [];

	for (let i = 0; i < commandArr.length; i++) {
		if (commandArr[i].charAt(0) === '-') {
			for (let j = 1; j < commandArr[i].length; j++) {
				flags.push(commandArr[i][j]);
			}
		} else {
			commandInfo.push(commandArr[i]);
		}
	}
	flags = flags.filter((elem, index, self) => index === self.indexOf(elem));

	return { command, flags, commandInfo };
}

export default function executeCommandStr(commandStr, cwd, dispatch) {
	const { command, flags, commandInfo } = getCommandInfo(commandStr);
	return commands[command] ? commands[command]({
		flags,
		commandInfo,
		cwd,
		dispatch,
	}) : commands.defaultCase();
}
