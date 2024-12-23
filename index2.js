let fs = require('fs');

fs.readFile('nodejs_architecture.txt',function(err,data){
    if(err) throw err;
    console.log('Data:',data.toString());
    console.log('File read successfully!');
    return data;
});
console.log("other stuff")
//synchronous way

// let data = fs.readFileSync('nodejs_architecture.txt');
// console.log('Data:',data.toString());
// console.log("Other stuff");