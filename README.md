# NODE and RabbitMQ
A very simple example of using amqp protocol from RabbitMQ on Nodejs.

# How to test
* [Install RabbitMQ in your device](http://www.rabbitmq.com/download.html).
* Enable RabbitMQ management `rabbitmq-plugins enable rabbitmq_management`
* Start RabbitMQ server `rabbitmq-server start`
* Run `npm install` to install all packages.
* Run `node receiver.js`
* A RabbitMQ channel will get opened.
* In another tab run `node sender.js`
* The sender should log `Sent You are so cool!`.
* Th receiver should log `Received You are so cool!`.