let structure = require("../models/model");

class HandleCommand {
    constructor(commandArgs, cwd) {
        this.command = commandArgs[0];
        this.flags = commandArgs[1];
        this.commandInfo = commandArgs[2];
        this.cwd = cwd;
        this.path = cwd;
    }

    lsCommand() {
        // Check if user passed in path as argument
        if (this.commandInfo.length > 0) {
            this.path = this.commandInfo[0];
        }
        // split on "/" and remove empty elements
        let pathStrArr = this.path.split("/");
        pathStrArr = pathStrArr.filter((elem, index, self) => {
            return index == self.indexOf(elem);
        });
        // relative path
        if (pathStrArr.length == 1) {
            pathStrArr = this.cwd.split("/");
            pathStrArr[pathStrArr.length - 1] = this.path;
        }
        let contents = structure["/"];
        // skipped root directory so start at 1
        for (let i = 1; i < pathStrArr.length; i++) {
            let tmpPath = pathStrArr[i];
            contents = contents[tmpPath];
        }
        if (!contents) {
            return ([{"text": "ls: cannot access " + this.path + ": No such file or directory"}]);
        }
        let lsContents = [];
        for (let prop in contents) {
            if (typeof contents[prop] == "object") {
                lsContents.push({"directory": prop});
            } else {
                lsContents.push({"text": prop})
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
        return ([{"text": "Command not found"}]);
    }
}

module.exports = HandleCommand;