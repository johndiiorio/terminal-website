import structure from './resources/structure';
import { HOME_PATH } from '../constants';

export function getAbsolutePath(path, cwd) {
	if (!path) {
		return null;
	}

	const pathHandledTilda = path.split('~').join(HOME_PATH);
	const splitPath = pathHandledTilda.split('/').filter(p => p !== '');
	const splitCwd = cwd.split('/').filter(p => p !== '');

	const isAbsolutePath = pathHandledTilda.startsWith('/');
	const startPoint = isAbsolutePath ? [] : splitCwd;

	const absolutePath = startPoint;
	splitPath.forEach(item => {
		if (item === '.') {
			// Do nothing
		} else if (item === '..') {
			absolutePath.pop();
		} else {
			absolutePath.push(item);
		}
	});
	return absolutePath;
}

export function getAbsolutePathStr(path, cwd) {
	return `/${getAbsolutePath(path, cwd).join('/')}`;
}

export function getContents(path, cwd) {
	const absolutePath = getAbsolutePath(path, cwd);
	let currentStructure = structure;
	let isError = false;
	absolutePath.every(item => {
		if (!currentStructure) {
			isError = true;
			return false;
		}
		const isInDirectory = currentStructure.directories && currentStructure.directories[item];
		const isInFiles = currentStructure.files && currentStructure.files[item];
		if (!isInDirectory && !isInFiles) {
			isError = true;
			return false;
		}

		if (isInDirectory) {
			currentStructure = currentStructure.directories[item];
		} else {
			currentStructure = {
				files: {
					[item]: currentStructure.files[item],
				},
			};
		}
		return true;
	});
	if (isError) {
		return null;
	}
	return isError ? null : currentStructure;
}
