import React from 'react';
import InputComponent from './InputComponent.jsx';
import PromptComponent from './PromptComponent.jsx';

export default class LineComponent extends React.Component {
	
	constructor(props) {
	    super(props);
  	}

	render() {
		return (
			<div>
				<PromptComponent name="user" path="~/Projects" /><InputComponent />
		  	</div>
		);
	}
}