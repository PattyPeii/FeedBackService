const swaggerAutogen = require('swagger-autogen')()

const outputLikeFile = './swagger_output_like.json'
const endpointsLikeFiles = ['./routes/LikeRoutes.js']

swaggerAutogen(outputLikeFile, endpointsLikeFiles)

const outputCommentFile = './swagger_output_comment.json'
const endpointsCommentFiles = ['./routes/CommentRoutes.js']

swaggerAutogen(outputCommentFile, endpointsCommentFiles)