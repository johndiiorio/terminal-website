import { getContents, getExecutableMessage } from '../utils';

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
		return [{ type: 'text', value: `file: ${path}: No such file or directory` }];
	}
	if (contents.directories) {
		return [{ type: 'text', value: `file: ${path}: Is a directory` }];
	}
	const files = contents.files;
	const fileName = Object.keys(files)[0];
	const file = files[fileName];
	let output = 'Unknown file type';
	if (file.type === 'text') {
		output = 'ASCII Text';
	} else if (file.type === 'executable') {
		output = getExecutableMessage();
	} else if (file.type === 'image') {
		output = 'Image data';
	}
	return [{ type: 'text', value: `${fileName}: ${output}` }];
}
