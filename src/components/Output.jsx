import React from 'react';

export default function Output({ outputData }) {
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
	const pictureStyle = {
		display: 'inline',
		maxHeight: 400,
		maxWidth: 400,
	};

	const text = [];
	const directories = [];
	const images = [];
	outputData.forEach(data => {
		if (data.type === 'directory') {
			directories.push(data.value);
		} else if (data.type === 'text') {
			text.push(data.value);
		} else if (data.type === 'image') {
			images.push(data.value);
		}
	});

	return (
		<div>
			{
				directories.map((value, index) => <li style={directoriesStyle} key={index}>{value}</li>)
			}
			{
				text.map((value, index) => <li style={textStyle} key={index}>{value}</li>)
			}
			{
				images.map((value, index) => <img style={pictureStyle} key={index} src={value} alt="" />)
			}
		</div>
	);
}
