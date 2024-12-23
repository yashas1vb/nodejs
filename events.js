const eventEmitter = require('node:events');

class SubscriptionService extends eventEmitter{};

const subscription = new SubscriptionService();

subscription.on('subscribe', (username)=>{
    console.log(`${username} has subscribed to the channel!`);
})

function userSub(username){
    console.log(`Processing subscription for user : ${username}`);
    subscription.emit('subscribe', username);
}

userSub('Shashank');



///continuation of 8th question

//In node.js maximum no.of listeners for an event is 10 by default.


console.log(`The default maximum number of event listeners are : ${eventEmitter.defaultMaxListeners}`);

subscription.setMaxListeners(5);

console.log(`The updated maximum number of event listeners are : ${subscription.getMaxListeners()}`);