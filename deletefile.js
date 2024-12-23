let fs = require('fs');
fs.unlink('nodejs_architecture.txt',function(err){
    if(err) throw err;
    console.log('Deleted file!');
});
