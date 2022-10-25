const PROTO_PATH="./proto/feedback.proto";

const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

var packageDefinition = protoLoader.loadSync(PROTO_PATH,{
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});

var feedbackService =grpc.loadPackageDefinition(packageDefinition).FeedbackService;
// const client = new feedbackService("0.0.0.0:30044", grpc.credentials.createInsecure());
const client  = new feedbackService(`${process.env.GRPC_FEEDBACK_PORT}`, grpc.credentials.createInsecure())

module.exports = client;
