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
  		this.state.lines.push(<LineComponent />);
  		this.forceUpdate();
  	}

	render() {
		return (
	        <div>
	        {
        		this.state.lines.map((line, index) => {
            		return <div key={index}>{line}</div>;
          		})
        	}
	        </div>
      	);
	}
}