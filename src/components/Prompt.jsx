import React from 'react';

export default function Prompt(props) {
	const greenStyle = {
		color: '#00ff00',
		fontFamily: 'monospace',
		fontSize: '150%',
	};
	const whiteStyle = {
		color: '#ffffff',
		fontFamily: 'monospace',
		fontSize: '150%',
	};
	const blueStyle = {
		color: '#38b6ff',
		fontFamily: 'monospace',
		fontSize: '150%',
	};
	const divStyle = {
		display: 'inline-block',
	};

	return (
		<div style={divStyle}>
			<span style={greenStyle}>
				{props.name}
				@johndiiorio
			</span>
			<span style={whiteStyle}>:</span>
			<span style={blueStyle}>{props.path}</span>
			<span style={whiteStyle}> $</span>
		</div>
	);
}
