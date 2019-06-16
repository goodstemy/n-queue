const EventEmitter = require('events');
const constants = require('./constants');

class Queue {
	constructor(config = {}) {
		this.ee = new EventEmitter();
		this.ee.setMaxListeners(config.maxListeners || constants.DEFAULT_MAX_EVENT_LISTENERS);
	}

	onMessage(cb) {
		this.ee.on('message', cb);
	}

	push(message) {
		this.ee.emit('message', message);
	}
}

module.exports = {
	NodeQueue: Queue
};
