import React from 'react';
import InputComponent from './InputComponent.jsx';
import PromptComponent from './PromptComponent.jsx';

export default class LineComponent extends React.Component {
	
	constructor(props) {
	    super(props);
	    this.state= {
	    	path: "/home/johndiiorio/"
        };
  	}

	render() {
		return (
			<div>
				<PromptComponent name="user" path={this.state.path} /><InputComponent path={this.state.path} />
		  	</div>
		);
	}
}