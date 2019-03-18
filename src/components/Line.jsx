import React from 'react';
import { connect } from 'react-redux';
import { addLine, clearLines, updateLineOutput } from '../actions';
import Input from './Input';
import Prompt from './Prompt';
import Output from './Output';
import executeCommand from '../parser/executeCommand';

function Line(props) {
	const onSubmit = value => {
		// TODO add line
		const command = value.toLowerCase();
		if (command === 'clear') {
			props.dispatch(clearLines());
			// TODO clear lines should keep the path of the previously selected line
		} else {
			const output = executeCommand(command, props.path);
			props.dispatch(updateLineOutput(props.id, output));
			props.dispatch(addLine());
		}
	};

	const divStyle = {
		paddingBottom: '15px',
	};
	return (
		<div style={divStyle}>
			<Prompt name="user" path={props.path} />
			<Input id={props.id} isSelected={props.isSelected} value={props.inputText} onSubmit={onSubmit} />
			<Output id={props.id} outputData={props.output} />
		</div>
	);
}

export default connect()(Line);

// export default class LineComponent extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 		this.state = {
// 			path: '/home/johndiiorio/',
// 			disabled: false,
// 			outputData: {
// 				directories: [],
// 				files: [],
// 			},
// 		};
// 	}

// 	handleSubmit(e) {
// 		if (e.charCode === 13) { // enter key pressed
// 			document.activeElement.disabled = true;
// 			this.props.addLine();
// 			const command = e.target.value.trim().toLowerCase();
// 			if (command === 'clear') {
// 				open(location, '_self').close();
// 			} else {
// 				axios.post('/api/command', {
// 					command,
// 					path: this.state.path,
// 				})
// 					.then(response => {
// 						this.setState({
// 							outputData: response.data,
// 						});
// 					})
// 					.catch(error => {
// 						console.log(error);
// 					});
// 			}
// 		}
// 	}

// 	render() {

// 	}
// }
