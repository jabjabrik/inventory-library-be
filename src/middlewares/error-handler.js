const errorHandlerMiddleware = (err, req, res, next) => {
    const customError = {
        statusCode: err.statusCode || 500,
        message: err.message || 'Something went wrong try again later',
    };

    res.status(customError.statusCode).json({ status: false, message: customError.message });
};

export default errorHandlerMiddleware;
