let structure = require("../models/model");

class HandleCommand {
    constructor(commandArgs, path) {
        this.command = commandArgs[0];
        this.flags = commandArgs[1];
        this.commandInfo = commandArgs[2];
        this.path = path;
    }

    lsCommand() {
        // split on "/" and remove empty elements
        let pathStrArr = this.path.split("/");
        pathStrArr = pathStrArr.filter((elem, index, self) => {
            return index == self.indexOf(elem);
        });
        let contents = structure["/"];
        // skip root directory so start at 1
        for (let i = 1; i < pathStrArr.length; i++) {
            let tmpPath = pathStrArr[i];
            contents = contents[tmpPath];
        }
        let lsContents = {
            "directories": [],
            "files": []
        };
        for (let prop in contents) {
            if (typeof contents[prop] == "object") {
                lsContents["directories"].push(prop);
            } else {
                lsContents["files"].push(prop);
            }
        }
        return lsContents;
    }

    catCommand() {

    }

    pingCommand() {

    }

    cdCommand() {

    }

    pwdCommand() {

    }

    sortCommand() {

    }

    exitCommand() {

    }

    manCommand() {

    }

    sudoCommand() {

    }

    defaultCase() {
        return "Command not found";
    }
}

module.exports = HandleCommand;