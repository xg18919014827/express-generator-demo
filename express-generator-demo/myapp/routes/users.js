var express = require("express");
var router = express.Router();
const model = require("../model/index");
var fs = require("fs");
var multiparty = require("multiparty");
var util = require("util");

var Kitten = model.Kitten;

/* GET users listing. */
router.get("/", function(req, res, next) {
    // Kitten.remove({}, function(err, doc) {
    //     if (err) {
    //         console.log(err)
    //     };
    //     console.log(doc);
    // });
    Kitten.create({ time: new Date("1575081667860") }, function(err, docs) {
        if (err) {
            console.log(err);
        }
        console.log(docs);
    });
    Kitten.findOne({ time: { $exists: true } }, function(err, docs) {
        if (err) {
            console.log(err);
        }
        console.log(docs);
        // var result = [];
        // docs.forEach(function(item, index) {
        //   result.push({ name: item.name, age: item.age || "" });
        // });
        // console.log(result);
        res.send({
            result: docs
        });
    });
});

router.get("/downloadFile", function(req, res, err) {
    //   fs.readFile("./public/徐国伟-职业生涯规划表-2019.xlsx", function(err, data) {
    //     if (err) {
    //       console.error(err);
    //     }
    res.download(
        "./public/text/徐国伟-职业生涯规划表-2019.xlsx",
        "职业生涯规划表.xlsx",
        function(err) {
            if (err) {
                console.log(err);
            }
            console.log("文件下载成功");
            res.end();
        }
    );
    //   console.log(data);
    // res.setHeader("Content-type", "text/html");
    // res.send(data);
    //   });
});

router.get("/getForm", function(req, res, err) {
    if (err) {
        console.error(err);
    }
    fs.readFile("./public/html/form.html", function(err, data) {
        if (err) {
            console.error(err);
        }
        res.write(data);
        res.end();
    });
});

router.post("/uploadFile", function(req, res, err) {
    if (err) {
        console.error(err);
    }
    var form = new multiparty.Form();
    //设置编辑
    form.encoding = "utf-8";
    //设置文件存储路径
    form.uploadDir = "./public/text/";
    form.parse(req, function(err, fields, files) {
        if (err) {
            console.error(err);
        }
        console.log(files.upload[0].originalFilename);
        console.log(files.upload[0].path);
        //同步重命名文件名
        fs.renameSync(
            files.upload[0].path,
            "./public/text/" + files.upload[0].originalFilename
        );
        console.log(files);
        // res.setHeader();
        res.writeHead(200, { "content-type": "text/html;charset=utf-8" });
        res.write("上传成功");
        res.end();
    });
});

module.exports = router;