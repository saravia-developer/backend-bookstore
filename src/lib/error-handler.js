export const errorHandler = (err, req, res, next) => {
  const error = {
    success: false,
    kindMessage: err.message,
    stack: err.stack,
    httpCode: err.httpCode
  };

  // res.status(error.httpCode).json({error});
  res.json({error});
}