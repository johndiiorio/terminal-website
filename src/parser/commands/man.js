import manPages from '../resources/manPages';

export default function({ commandInfo }) {
	if (commandInfo.length === 0) {
		return [{ type: 'text', value: 'What man page do you want?' }];
	}
	const page = manPages[commandInfo[0]];
	if (page) {
		return [{ type: 'text', value: page }];
	} else {
		return [{ type: 'text', value: `No manuel entry for ${commandInfo[0]}` }];
	}
}
