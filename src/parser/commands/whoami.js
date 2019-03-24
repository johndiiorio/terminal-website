import UAParser from 'ua-parser-js';

export default function() {
	const parser = new UAParser(navigator.userAgent);
	const result = parser.getResult();
	const text = `You are a ${result.os.name} user on ${result.browser.name} v${result.browser.version}.`;
	return [{ type: 'text', value: text }];
}
