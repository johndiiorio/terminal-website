import React from 'react';
import { connect } from 'react-redux';
import { addLine, clearLines, updateLineOutput } from '../actions';
import Input from './Input';
import Prompt from './Prompt';
import Output from './Output';
import executeCommand from '../parser/executeCommand';

function Line(props) {
	const onSubmit = value => {
		const command = value.trim();
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
