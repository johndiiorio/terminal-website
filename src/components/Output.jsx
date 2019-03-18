import React from 'react';

export default function Output(props) {
	const directoriesStyle = {
		display: 'inline',
		paddingRight: '15px',
		color: '#6391ff',
		whiteSpace: 'pre-wrap',
	};
	const textStyle = {
		display: 'inline',
		paddingRight: '15px',
		color: '#c3c3c3',
		whiteSpace: 'pre-wrap',
	};

	const data = props.outputData;
	const text = [];
	const directories = [];
	for (const i in data) {
		if (Object.keys(data[i])[0] == 'directory') {
			directories.push(data[i].directory);
		} else if (Object.keys(data[i])[0] == 'text') {
			text.push(data[i].text);
		} else { } // Nothing returned or unexpected return value
	}

	return (
		<div>
			{
				directories.map((name, index) => <li style={directoriesStyle} key={index}>{name}</li>)
			}
			{
				text.map((name, index) => <li style={textStyle} key={index}>{name}</li>)
			}
		</div>
	);
}
