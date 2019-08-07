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
// const fs = require('fs');

// // const files = fs.readdirSync('./');
// // console.log(files);

// fs.readdir('./', function(err, files) {
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// });


// EVENT MODULE & EVENT ARGUMENTS
// const EvenEmitter = require('events');

// const Logger = require('./logger');
// const logger = new Logger();

// // Register listener
// logger.on('messageLogged', (arg) => {
//     console.log('Listener called', arg);
// });


// logger.log('message');



// HTTP MODULE
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(3300);

console.log('listening on port 3300...');