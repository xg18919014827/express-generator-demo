const mongoose = require('mongoose');
const config = require('./url-config');
const model = require('../model/index');

mongoose.connect(config.mongoose); //连接到mongoose服务器
var db = mongoose.connection;
db.on('error', function() {
    console.error.bind(console, 'connection error:');
});
db.once('open', function() {
    console.log('we are connected');

    //引用Kitten model
    var Kitten = model.Kitten;
    Kitten.speakLoudly();

    //实例化文档
    var littleDark = new Kitten({
        name: '小黑'
    });
    // console.log(littleDark.name);
    littleDark.speak();
    //保存数据到数据库
    littleDark.save(function(err, doc) {
        if (err) return console.error(err);
        console.log(littleDark, 'save doc');
    });
    //数据库中查询文档
    Kitten.find({}, function(err, docs) {
        if (err) return console.error(err);
        console.log(docs, 'find docs');
    })
});