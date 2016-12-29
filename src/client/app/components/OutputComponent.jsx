import React from 'react';

export default class OutputComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const directoriesStyle = {
            display: "inline",
            paddingRight: "15px",
            color: "#6391ff"
        };
        const filesStyle = {
            display: "inline",
            paddingRight: "15px",
            color: "#c3c3c3"
        };

        return (
            <div>
                {
                    this.props.outputData.directories.map((name, index) => {
                        return <li style={directoriesStyle} key={index}>{name}</li>
                    })
                }
                {
                    this.props.outputData.files.map((name, index) => {
                        return <li style={filesStyle} key={index}>{name}</li>
                    })
                }
            </div>
        );
    }
}