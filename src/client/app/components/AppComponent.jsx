import React from 'react';
import LineComponent from './LineComponent.jsx';

export default class TerminalComponent extends React.Component {

	constructor(props) {
	    super(props);
	    this.addLine = this.addLine.bind(this);
	    this.state = {
	    	lines: [<LineComponent />]
	    };
  	}

  	addLine() {
        this.setState({lines: this.state.lines.concat(<LineComponent key={this.state.lines.length}/>)});
    }

	render() {
		return (
	        <div>
	        {
        		this.state.lines.map((line, index) => {
                    { return <LineComponent key={index} {...line} addLine={this.addLine} /> }
          		})
        	}
	        </div>
      	);
	}
}