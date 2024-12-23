let fs = require('fs');

fs.appendFile('nodejs_architecture.txt','Node js is single threaded nut provides means for doing async tasks', function(err){
   if(err) throw err;
   console.log("Appended successfully");
})