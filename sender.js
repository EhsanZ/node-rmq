var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function (err, conn) {
    conn.createChannel(function (err, ch) {
        var q = "message";

        ch.assertQueue(q, {
            durable: false
        });

        ch.sendToQueue(q, new Buffer("You'r so cool!"));
        console.log(" [x] Sent ", "You'r so cool!");
    });
});
