function getCommandInfo(str) {
	let commandArr = str.split(" ");
    let command = commandArr.shift();
    let flags = [];
    let commandInfo = [];

    for (let i = 0; i < commandArr.length; i++) {
    	if (commandArr[i].charAt(0) == "-") {
    		for (let j = 1; j < commandArr[i].length; j++) {
    			flags.push(commandArr[i][j]);
    		}
    	} else {
    		commandInfo.push(commandArr[i]);
    	}
    }
    return [command, flags, commandInfo];
}

module.exports = getCommandInfo;