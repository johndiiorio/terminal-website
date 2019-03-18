import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { updateLineInput, updateSelectedLine } from '../actions';

function Input({ onSubmit, value, isSelected, id, dispatch }) {
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

	const onKeyPress = e => {
		if (e.charCode === 13) {
			onSubmit(value);
		}
	};

	const onChange = e => {
		dispatch(updateLineInput(id, e.target.value));
	};

	const onFocus = () => {
		dispatch(updateSelectedLine(id));
	};

	const inputEl = useRef(null);

	useEffect(() => {
		if (isSelected) {
			inputEl.current.focus();
		}
	}, [isSelected]);

	return (
		<span>
			<input
				style={inputStyle}
				onKeyPress={onKeyPress}
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

export default connect()(Input);
