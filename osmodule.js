let os = require('os');

let type = os.type();
let release = os.release();
console.log("Operating system name:",type);
console.log("OS release:", release);