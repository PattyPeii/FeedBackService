const CommentModel = require("../models/CommentModel");
var amqp = require('amqplib/callback_api');

exports.getAllComment = async (recipe_id) => {
  return await CommentModel.find({recipe_id:recipe_id});
};

exports.postComment = async (comment, recipe_id) => {
  amqp.connect(process.env.RABBIT_HOST, function(error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function(error1, channel) {
            if (error1) {
              throw error1;
            }
            var queue = 'comment';
            comment["recipe_id"] = recipe_id;
            var msg = JSON.stringify(comment)
            console.log(msg)
        
            channel.assertQueue(queue, {
              durable: false
            });
            channel.sendToQueue(queue, Buffer.from(msg));
            console.log(" [x] Sent %s: '%s'", queue, msg);
          });
        });
  return;
};

exports.getCommentById = async (id) => {
  return await CommentModel.findById(id);
};

exports.updateComment = async (id, comment) => {
  comment["_id"] = id;
  amqp.connect(process.env.RABBIT_HOST, function(error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function(error1, channel) {
            if (error1) {
              throw error1;
            }
            var queue = 'comment';
            comment["recipe_id"] = recipe_id;
            var msg = JSON.stringify(comment)
            console.log(msg)
        
            channel.assertQueue(queue, {
              durable: false
            });
            channel.sendToQueue(queue, Buffer.from(msg));
            console.log(" [x] Sent %s: '%s'", severity, msg);
          });
        });
  return comment;
};

exports.deleteComment = async (id) => {
  return await CommentModel.findByIdAndDelete(id);
};
