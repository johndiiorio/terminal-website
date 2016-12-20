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
        // path is "/", return entire structure
        if (pathStrArr.length == 1) return structure["/"];
        let contents = structure["/"];
        // skip root directory so start at 1
        for (let i = 1; i < pathStrArr.length; i++) {
            let tmpPath = pathStrArr[i];
            contents = contents[tmpPath];
        }
        return contents;
    }

    catCommand() {

    }

    pingCommand() {

    }

    cdCommand() {

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

    }
}

module.exports = HandleCommand;