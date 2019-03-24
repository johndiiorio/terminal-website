import { getNonStandardCommandNames } from '../utils';

export default function() {
	return [
		{
			type: 'text',
			value: `
Here is a list of the non-standard executable commands: ${getNonStandardCommandNames().join(', ')}.
Type "man <command>" for more information.
See /usr/bin for all commands.
			`,
		},
	];
}
