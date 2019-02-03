var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
   if (err) return console.error(err);
   console.log("here is the results :::"+data.toString());
});

console.log("Program Ended");


var fs = require("fs");

fs.readFile('input1.txt', function (err, data) {
   if (err){
      console.log(" here is the error:: "+err.stack);
      //err.toString();
      return;
   }
   console.log(data.toString());
});
console.log("Program Ended");