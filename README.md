# node-queue
## Primitive queue based on node.js event emitter
### Example: 

```
const NodeQueue = require('node-queue');

const config = {
	// NodeQueue based on EventEmitter, so you can change maxListeners by yourself
	maxListeners: 10,
};
// You can omit config
const queue = new NodeQueue(config);

// Subscribe on new messages
queue.onMessage((msg) => {
	console.log(msg);
});

// Send message to queue
queue.push('base message');

// ...repeat a hundred times
for (let i = 0; i < 100; i++) {
	queue.push(`my own message #${i}`);
}
```
