// const CustomAPIError = require('../errors/custom-error')
// const errorHandlerMiddleware = (err, req, res, next) => {
//   if (err instanceof CustomAPIError) {
//     return res.status(err.statusCode).json({ msg: err.message })
//   }
//   return res.status(500).send('Something went wrong try again later,This error is from error handler not an instance of CustomAPIError')
// }

// module.exports = errorHandlerMiddleware
