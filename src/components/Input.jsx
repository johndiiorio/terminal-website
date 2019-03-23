import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { updateLineInput, updateSelectedLine, updateNumBackInCommandHistory } from '../actions';

function Input({ onSubmit, value, isSelected, numBackInCommandHistory, id, dispatch }) {
	const inputStyle = {
		backgroundColor: '#000000',
		color: '#FFFFFF',
		borderWidth: '0px',
		outline: 'none',
		border: 'none',
		paddingLeft: '15px',
		fontFamily: 'monospace',
		fontSize: '150%',
	};

	const inputEl = useRef(null);

	useEffect(() => {
		if (isSelected) {
			inputEl.current.focus();
		}
	}, [isSelected]);

	const onKeyDown = e => {
		if (e.keyCode === 13) { // Enter
			onSubmit(value);
		} else if (e.keyCode === 38) { // Up
			dispatch(updateNumBackInCommandHistory(id, numBackInCommandHistory + 1));
		} else if (e.keyCode === 40) { // Down
			dispatch(updateNumBackInCommandHistory(id, numBackInCommandHistory - 1));
		}
	};

	const onChange = e => {
		dispatch(updateLineInput(id, e.target.value));
	};

	const onFocus = () => {
		dispatch(updateSelectedLine(id));
	};

	return (
		<span>
			<input
				style={inputStyle}
				onKeyDown={onKeyDown}
				onChange={onChange}
				onFocus={onFocus}
				value={value}
				type="text"
				size="100"
				ref={inputEl}
			/>
		</span>
	);
}

const mapStateToProps = state => {
	return {
		commandHistory: state.commandHistory,
	};
}

export default connect(mapStateToProps)(Input);
