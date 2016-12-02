let express = require('express');
let router = express.Router();
let getCommandInfo = require('../controllers/getCommandInfo');

/* command called */
router.post('/', (req, res) => {
	let command = getCommandInfo(req.body.command);
    res.json(command);
});

module.exports = router;