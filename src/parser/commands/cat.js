import { getContents } from '../utils';

export default function({ commandInfo, cwd }) {
	const [path] = commandInfo;
	let pathOrCwd = cwd;
	if (commandInfo.length === 0) {
		return [{ text: 'What file do you want?' }];
	} else {
		pathOrCwd = path;
	}
	const contents = getContents(pathOrCwd, cwd);
	if (!contents) {
		return [{ type: 'text', value: `cat: ${path}: No such file or directory` }];
	}
	if (contents.directories) {
		return [{ type: 'text', value: `cat: ${path}: Is a directory` }];
	}
	const files = contents.files;
	return [{ type: 'text', value: files[Object.keys(files)[0]].contents }];
}
