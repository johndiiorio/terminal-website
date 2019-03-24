import React, { useRef } from 'react';
import { connect } from 'react-redux';
import useInterval from 'react-useinterval';
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

	useInterval(() => {
		if (inputEl && inputEl.current) {
			inputEl.current.focus();
		}
	}, isSelected ? 50 : null);

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
			{isSelected ? (
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
			) : (
				<span style={inputStyle}>{value}</span>
			)}
		</span>

	);
}

export default connect()(Input);
