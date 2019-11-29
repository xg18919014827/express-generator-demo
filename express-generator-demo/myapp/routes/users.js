var express = require('express');
var router = express.Router();
const model = require('../model/index');

var Kitten = model.Kitten;

/* GET users listing. */
router.get('/', function(req, res, next) {
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
    Kitten.find({},
        function(err, docs) {
            if (err) {
                console.log(err)
            };
            console.log(docs);
            var result = [];
            docs.forEach(function(item, index) {
                result.push({ name: item.name, age: item.age || '' });
            })
            console.log(result);
            res.send({
                result: result
            });
        });
});


module.exports = router;