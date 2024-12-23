const EventEmitter = require('events');

class EventDemo extends EventEmitter {}

const eventDemo = new EventDemo();

const handler = () => {
  console.log('The event handler is called!');
};

eventDemo.on('testEvent', handler);

console.log('Triggering testEvent for the first time...');
eventDemo.emit('testEvent'); 

console.log('Removing the event handler...');
eventDemo.removeListener('testEvent', handler);

console.log('Triggering testEvent after removal...');
eventDemo.emit('testEvent'); 
