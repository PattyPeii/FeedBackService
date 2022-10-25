const LikeModel = require("../models/LikeModel");
var amqp = require('amqplib/callback_api');

exports.getAllLike = async (recipe_id) => {
  return await LikeModel.find({recipe_id:recipe_id});
};

// exports.postLike = async (like, recipe_id) => {
//   amqp.connect(process.env.RABBIT_HOST, function(error0, connection) {
//         if (error0) {
//             throw error0;
//         }
//         connection.createChannel(function(error1, channel) {
//             if (error1) {
//               throw error1;
//             }
//             var exchange = 'direct_logs';
//             var severity = "like"
//             like["recipe_id"] = recipe_id;
//             var msg = JSON.stringify(like)
//             console.log(msg)
        
//             channel.assertExchange(exchange, 'direct', {
//               durable: false
//             });
//             channel.publish(exchange, severity, Buffer.from(msg));
//             console.log(" [x] Sent %s: '%s'", severity, msg);
//           });
//         });
//   return;
// };

// exports.getLikeById = async (id) => {
//   return await LikeModel.findById(id);
// };

// exports.updateLike = async (id, like) => {
//   like["_id"] = id;
//   amqp.connect(process.env.RABBIT_HOST, function(error0, connection) {
//         if (error0) {
//             throw error0;
//         }
//         connection.createChannel(function(error1, channel) {
//             if (error1) {
//               throw error1;
//             }
//             var exchange = 'direct_logs';
//             var severity = "like"
//             var msg = JSON.stringify(like)
//             console.log(msg)
        
//             channel.assertExchange(exchange, 'direct', {
//               durable: false
//             });
//             channel.publish(exchange, severity, Buffer.from(msg));
//             console.log(" [x] Sent %s: '%s'", severity, msg);
//           });
//         });
//   return like;
// };

// exports.deleteLike = async (id) => {
//   return await LikeModel.findByIdAndDelete(id);
// };
