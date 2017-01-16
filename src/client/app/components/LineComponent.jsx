import React from 'react';
import InputComponent from './InputComponent.jsx';
import PromptComponent from './PromptComponent.jsx';
import OutputComponent from './OutputComponent.jsx';

export default class LineComponent extends React.Component {
	
	constructor(props) {
	    super(props);
        this.disableLine = this.disableLine.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
	    	path: "/home/johndiiorio/",
			disabled: false,
			outputData: {
	    		directories: [],
				files: []
			}
        };
  	}

  	disableLine() {
		this.setState({ disabled: true });
	}

    handleSubmit(e) {
        if (e.charCode == 13) { // enter key pressed
            document.activeElement.disabled = true;
            this.props.addLine();
            let command = e.target.value.trim().toLowerCase();
            if (command == "clear") {
                open(location, '_self').close();
            } else {
                axios.post('/api/command', {
                    command: command,
                    path: this.state.path
                })
				.then((response) => {
					this.setState({
						outputData: response.data
					});
				})
				.catch((error) => {
					console.log(error);
				});
            }
        }
    }

	render() {
		const divStyle = {
			paddingBottom: "15px"
		};
		return (
			<div style={divStyle}>
				<PromptComponent name="user" path={this.state.path} /><InputComponent path={this.state.path} handleSubmit={this.handleSubmit} />
				<OutputComponent outputData={this.state.outputData} />
		  	</div>
		);
	}
}