import { addLine } from '../../actions';
import { getAbsolutePathStr, getContents } from '../utils';

export default function({ commandInfo, cwd, dispatch }) {
	let pathOrCwd = cwd;
	const [path] = commandInfo;
	if (commandInfo.length > 0) {
		pathOrCwd = path;
	}

	const contents = getContents(pathOrCwd, cwd);
	if (contents && contents.directories) {
		const newPath = getAbsolutePathStr(pathOrCwd, cwd);
		dispatch(addLine(newPath));
		return { noop: true };
	} else if (contents && contents.files) {
		return [{ type: 'text', value: `cd: not a directory: ${path}` }];
	} else {
		return [{ type: 'text', value: `cd: no such file or directory: ${path}` }];
	}
}
