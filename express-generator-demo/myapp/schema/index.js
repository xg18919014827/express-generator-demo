const mongoose = require("mongoose");

var kittySchema = mongoose.Schema({
  name: {
    type: String
  },
  age: {
    type: Number
  },
  time: {
    type: Date
  }
});
//向Schema中添加实例方法
kittySchema.methods.speak = function() {
  var greeting = this.name
    ? "kitty name is " + this.name
    : "I dont have a name";
  console.log(greeting);
};
//向Schema中添加静态方法
kittySchema.statics.speakLoudly = function() {
  console.log("speak loudly");
};

module.exports = {
  kittySchema: kittySchema
};
