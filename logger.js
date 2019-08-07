const EvenEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EvenEmitter {
    log(message) {
    // send an http request
    console.log(message);

    // Raise an Event
    this.emit('messageLogged', {id: 1, url: 'http://'});
    }
}

module.exports = Logger;