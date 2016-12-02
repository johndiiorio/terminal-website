import React from 'react';

export default class InputComponent extends React.Component {
	
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		if (e.charCode == 13) { // enter key pressed
			axios.post('/api/command', {
				command: e.target.value
			})
			.then(function (response) {
				console.log(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
		}
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
				<input style={inputStyle} onKeyPress={this.handleSubmit} type="text" size="100"></input>
			</span>
		);
	}
}