export default function({ commandInfo, cwd }) {
	if (commandInfo.length > 0) {
		return [{ text: 'Too many arguments' }];
	}
	return [{ text: cwd }];
}
