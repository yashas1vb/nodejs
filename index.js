let fs = require('fs');

fs.writeFile('nodejs_architecture.txt','Node js is a JavaScript runtime environment', function(err){
    if(err) throw err;
    console.log('Saved!');
})