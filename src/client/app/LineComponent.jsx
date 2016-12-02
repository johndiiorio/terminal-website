import React from 'react';
import InputComponent from './InputComponent.jsx';
import PromptComponent from './PromptComponent.jsx';

export default class LineComponent extends React.Component {
	
	constructor(props) {
	    super(props);
	    this.state = {
	    	active: true
	    };
	   	this.disable = this.disable.bind(this);
  	}

  	disable() {
  		this.state.active = false;
  	}

	render() {
		return (
			<div>
				<PromptComponent name="user" path="~/Projects" /><InputComponent />
		  	</div>
		);
	}
}