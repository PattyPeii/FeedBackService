const express = require("express");
const mongoose = require("mongoose");
const feedbackRouter = require("./routes/FeedbackRoutes");
var grpc = require("grpc");
const PROTO_PATH="./proto/feedback.proto";
var grpc = require("grpc");
var protoLoader = require("@grpc/proto-loader");
const feedbackService = require("./services/FeedbackService");

const app = express();

require("dotenv").config();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/feedback", feedbackRouter);

console.log(process.env.MONGODB_URI);

//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

// config gRPC

const server = new grpc.Server();
module.server = server;
server.bind(`0.0.0.0:${process.env.GRPC_PORT}`,grpc.ServerCredentials.createInsecure());

var packageDefinition = protoLoader.loadSync(PROTO_PATH,{
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true
});
var feedbackProto =grpc.loadPackageDefinition(packageDefinition);

server.addService(feedbackProto.UserService.service,{
  GetUserInformation: async (call,callback)=>{
      let user = await userService.getUserById(call.request.user_id);
      if(user) {
          callback(null, user);
      }else {
          callback({
              code: grpc.status.NOT_FOUND,
              details: "Not found"
          });
      }
  }
});

app.listen(process.env.API_PORT, () => {
  server.start();
  console.log(`gRPC Server is running on port ${process.env.GRPC_PORT}`);
  console.log(`Server is running on port ${process.env.API_PORT}`);
});

module.exports = app;
