import React from 'react';

export default class OutputComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const directoriesStyle = {
            display: "inline",
            paddingRight: "15px",
            color: "#6391ff",
            whiteSpace: 'pre-wrap'
        };
        const textStyle = {
            display: "inline",
            paddingRight: "15px",
            color: "#c3c3c3",
            whiteSpace: 'pre-wrap'
        };

        let data = this.props.outputData;
        let text = [];
        let directories = [];
        for (let i in data) {
            if (Object.keys(data[i])[0] == "directory") {
                directories.push(data[i]["directory"]);
            } else if (Object.keys(data[i])[0] == "text") {
                text.push(data[i]["text"]);
            } else {} // Nothing returned or unexpected return value
        }

        return (
            <div>
                {
                    directories.map((name, index) => {
                        return <li style={directoriesStyle} key={index}>{name}</li>
                    })
                }
                {
                    text.map((name, index) => {
                        return <li style={textStyle} key={index}>{name}</li>
                    })
                }
            </div>
        );
    }
}