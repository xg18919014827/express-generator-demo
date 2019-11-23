var express = require('express');
var router = express.Router();
const model = require('../model/index');

var Kitten = model.Kitten;

/* GET users listing. */
router.get('/', function(req, res, next) {
    // Kitten.find({});
    res.send(Kitten.find({}));
});


module.exports = router;