import React from 'react';

export default class InputComponent extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		const inputStyle = {
			backgroundColor: "#000000",
			color: "#FFFFFF",
			borderWidth: "0px",
			outline: "none",
			border: "none",
			paddingLeft: "15px",
			fontFamily: 'monospace',
			fontSize: '150%',
		};

		return (
			<span>
				<input autoFocus style={inputStyle} onKeyPress={this.props.handleSubmit} type="text" size="100"/>
			</span>
		);
	}
}