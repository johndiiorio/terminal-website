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
		return [{ type: 'text', value: `pic: ${path}: No such file or directory` }];
	}
	if (contents.directories) {
		return [{ type: 'text', value: `pic: ${path}: Is a directory` }];
	}
	const files = contents.files;
	const fileName = Object.keys(files)[0];
	const file = files[fileName];
	if (file.type !== 'image') {
		return [{ type: 'text', value: `pic: ${path}: Is not an image` }];
	}
	return [{ type: 'image', value: file.contents }];
}
