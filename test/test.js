const assert = require('assert');
const NodeQueue = require('../index');

describe('Basic node queue work', () => {
  describe('create queue', () => {
    it('should be ok', () => {
			const queue = new NodeQueue();

			queue.onMessage(msg => {
				assert(msg === 'ok');
			});

			queue.push('ok');
    });
  });

  describe('message order', () => {
  	it('should be valid', () => {
  		const queue = new NodeQueue();
  		let i = 1;

			queue.onMessage(msg => {
				assert(msg === `msg #${i}`);
				i++;
			});

			queue.push(`msg #${i}`);
			setTimeout(() => {
				queue.push(`msg #${i}`);
			}, 1000);
			setTimeout(() => {
				queue.push(`msg #${i}`);
			}, 500);
  	});
  });
});
