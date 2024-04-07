export const errorHandler = (status, message) => {
    const error = new Error()

    error.statusCode = status || 500
    error.message = message

    return error
 }