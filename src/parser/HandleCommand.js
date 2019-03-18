import structure from './structure';
import manPages from './manPages';

export default class HandleCommand {
	constructor(commandArgs, cwd) {
		this.command = commandArgs[0];
		this.flags = commandArgs[1];
		this.commandInfo = commandArgs[2];
		this.cwd = cwd;
		this.path = cwd;
	}

	lsCommand() {
		// Check if user passed in path as argument
		if (this.commandInfo.length > 0) {
			this.path = this.commandInfo[0];
		}
		// handle "." and ".." paths
		if (this.path === '.') {
			this.path = this.cwd;
		} else if (this.path === '..') {
			const tmpArr = this.cwd.split('/');
			tmpArr.length -= 2;
			this.path = tmpArr.join('/');
		}
		// split on "/" and remove empty elements
		let pathStrArr = this.path.split('/');
		pathStrArr = pathStrArr.filter((elem, index, self) => index === self.indexOf(elem));
		if (pathStrArr.length === 1 && pathStrArr[0] === '') { // path is "/"
			pathStrArr[0] = '/';
		} else if (pathStrArr.length === 1) { // relative path
			pathStrArr = this.cwd.split('/');
			pathStrArr[pathStrArr.length - 1] = this.path;
		}
		let contents = structure['/'];
		// skipped root directory so start at 1
		for (let i = 1; i < pathStrArr.length; i++) {
			const tmpPath = pathStrArr[i];
			contents = contents[tmpPath];
		}
		if (!contents) {
			return [{ text: `ls: cannot access ${this.path}: No such file or directory` }];
		}
		const lsContents = [];
		for (const prop in contents) {
			if (typeof contents[prop] === 'object') {
				lsContents.push({ directory: prop });
			} else {
				lsContents.push({ text: prop });
			}
		}
		return lsContents;
	}

	catCommand() {
		if (this.commandInfo.length === 0) {
			return [{ text: 'What file do you want?' }];
		} else {
			this.path = this.commandInfo[0];
		}
		if (this.path === '.' || this.path === '..') {
			return [{ text: `cat: ${this.path}: Is a directory` }];
		}
		// split on "/" and remove empty elements
		let pathStrArr = this.path.split('/');
		pathStrArr = pathStrArr.filter((elem, index, self) => index === self.indexOf(elem));
		if (pathStrArr.length === 1 && pathStrArr[0] === '') { // path is "/"
			pathStrArr[0] = '/';
		} else if (pathStrArr.length === 1) { // relative path
			pathStrArr = this.cwd.split('/');
			pathStrArr[pathStrArr.length - 1] = this.path;
		}
		let contents = structure['/'];
		// skipped root directory so start at 1
		for (let i = 1; i < pathStrArr.length; i++) {
			const tmpPath = pathStrArr[i];
			contents = contents[tmpPath];
		}
		if (!contents) {
			return [{ text: `cat: ${this.path}: No such file or directory` }];
		}
		if (typeof contents === 'object') {
			return [{ text: `cat: ${this.path}: Is a directory` }];
		}
		return [{ text: contents }];
	}

	pingCommand() {

	}

	cdCommand() {

	}

	pwdCommand() {
		if (this.commandInfo.length != 0) {
			return [{ text: 'Too many arguments' }];
		}
		return [{ text: this.path }];
	}

	sortCommand() {

	}

	manCommand() {
		if (this.commandInfo.length == 0) {
			return [{ text: 'Which man page do you want?' }];
		}
		const page = manPages[this.commandInfo[0]];
		if (page) {
			return ([{ text: page }]);
		} else {
			return [{ text: `No manuel entry for ${this.commandInfo[0]}` }];
		}
	}

	sudoCommand() {

	}

	defaultCase() {
		return [{ text: 'Command not found' }];
	}
}
