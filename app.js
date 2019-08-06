// const log = require('./logger');

// log('message');



// PATH MODULE
// const path = require('path');

// var pathObj = path.parse(__filename);
// console.log(pathObj);


// // OS MODULE
// const os = require('os');
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// // console.log('Total Memory: ' + totalMemory);

// // Template string
// // ES6 / ES2015 : ECMASript 6

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);



// FILE SYSTEM MODULE
const fs = require('fs');

const file = fs.readdirSync('./');
console.log(file);

fs.readdir('$', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files);
});