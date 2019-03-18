import HandleCommand from './HandleCommand';

function getCommandInfo(str) {
	const commandArr = str.split(' ');
	const command = commandArr.shift();
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

	return [command, flags, commandInfo];
}

export default function executeCommand(command, path) {
	const parsedCommand = getCommandInfo(command);
	const handleCommand = new HandleCommand(parsedCommand, path);
	let output = '';
	switch (parsedCommand[0]) {
		case 'ls':
			output = handleCommand.lsCommand(); break;
		case 'cat':
			output = handleCommand.catCommand(); break;
		case 'ping':
			output = handleCommand.pingCommand(); break;
		case 'cd':
			output = handleCommand.cdCommand(); break;
		case 'pwd':
			output = handleCommand.pwdCommand(); break;
		case 'sort':
			output = handleCommand.sortCommand(); break;
		case 'man':
			output = handleCommand.manCommand(); break;
		case 'sudo':
			output = handleCommand.sudoCommand(); break;
		default:
			output = handleCommand.defaultCase(); break;
	}
	return output;
}
