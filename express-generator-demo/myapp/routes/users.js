var express = require('express');
var router = express.Router();
const model = require('../model/index');

var Kitten = model.Kitten;

/* GET users listing. */
router.get('/', function(req, res, next) {
    // Kitten.create({ name: 'ace' }, function(err, doc) {
    //     if (err) {
    //         console.log(err)
    //     };
    //     console.log(doc);
    // });
    // Kitten.remove({}, function(err, doc) {
    //     if (err) {
    //         console.log(err)
    //     };
    //     console.log(doc);
    // });
    // Kitten.create({ 'age': 28 }, function(err, docs) {
    //     if (err) {
    //         console.log(err)
    //     };
    //     console.log(docs)
    // });
    var result = null;
    Kitten.find({
            $or: [{ name: 'Ace' }, { age: 28 }]
        },
        function(err, docs) {
            if (err) {
                console.log(err)
            };
            console.log(docs);
            result = docs[0].name;
            console.log(result);
        });
    res.json({
        result: result
    });
});


module.exports = router;