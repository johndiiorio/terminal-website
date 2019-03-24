export default function({ commandInfo, cwd }) {
	if (commandInfo.length > 0) {
		return [{ type: 'text', value: 'Too many arguments' }];
	}
	return [{ type: 'text', value: cwd }];
}
