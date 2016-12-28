let express = require('express');
let router = express.Router();
let getCommandInfo = require('../controllers/getCommandInfo');
let HandleCommand = require('../controllers/HandleCommand');

/* command called */
router.post('/', (req, res) => {
	let command = getCommandInfo(req.body.command);
    let handleCommand = new HandleCommand(command, req.body.path);
    let output = "";
    switch (command[0]) {
        case "ls":
            output = handleCommand.lsCommand(); break;
        case "cat":
            output =  handleCommand.catCommand(); break;
        case "ping":
            output =  handleCommand.pingCommand(); break;
        case "cd":
            output =  handleCommand.cdCommand(); break;
        case "pwd":
            output = handleCommand.pwdCommand(); break;
        case "sort":
            output =  handleCommand.sortCommand(); break;
        case "exit":
            output =  handleCommand.exitCommand(); break;
        case "man":
            output =  handleCommand.manCommand(); break;
        case "sudo":
            output =  handleCommand.sudoCommand(); break;
        default:
            output = handleCommand.defaultCase(); break;
    }
    res.json(output);
});

module.exports = router;