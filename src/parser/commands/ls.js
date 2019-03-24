import { getContents } from '../utils';

export default function({ commandInfo, cwd }) {
	let pathOrCwd = cwd;
	const [path] = commandInfo;

	// Check if user passed in path as argument
	if (commandInfo.length > 0) {
		pathOrCwd = path;
	}

	const contents = getContents(pathOrCwd, cwd);

	if (!contents) {
		return [{ text: `ls: cannot access ${path}: No such file or directory` }];
	}
	const directories = contents.directories || {};
	const files = contents.files || {};
	const lsContents = [];
	Object.keys(directories).forEach(directoryName => {
		lsContents.push({ type: 'directory', value: directoryName });
	});
	Object.keys(files).forEach(fileName => {
		lsContents.push({ type: 'text', value: fileName });
	});
	return lsContents;
}
