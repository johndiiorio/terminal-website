import React from 'react';
import {render} from 'react-dom';
import TerminalComponent from './TerminalComponent.jsx';

class App extends React.Component {

	render() {
		return (
			<div>
				<TerminalComponent />
		  	</div>
		);
	}
}

render(<App/>, document.getElementById('app'));