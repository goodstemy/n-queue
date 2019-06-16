const NodeQueue = require('./index.js');

const config = {
	maxListeners: 10,
};
const queue = new NodeQueue(config);

queue.onMessage((msg) => {
	console.log(msg);
});

queue.push('base message');

for (let i = 0; i < 100; i++) {
	queue.push(`my own message #${i}`);
}
