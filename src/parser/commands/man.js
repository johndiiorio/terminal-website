import manPages from '../resources/manPages';

export default function({ commandInfo }) {
	if (commandInfo.length === 0) {
		return [{ text: 'What man page do you want?' }];
	}
	const page = manPages[commandInfo[0]];
	if (page) {
		return ([{ text: page }]);
	} else {
		return [{ text: `No manuel entry for ${commandInfo[0]}` }];
	}
}
