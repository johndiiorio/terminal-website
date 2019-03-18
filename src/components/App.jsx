import React from 'react';
import { connect } from 'react-redux';
import Line from './Line';

function App({ lines, selectedLine }) {
	return (
		<div>
			{lines.map((line, index) => <Line {...line} id={index} key={index} isSelected={selectedLine === index} />)}
		</div>
	);
}

const mapStateToProps = state => ({
	lines: state.lines,
	selectedLine: state.selectedLine,
});

export default connect(mapStateToProps)(App);
