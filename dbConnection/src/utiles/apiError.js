// Define a custom error class 'ApiError' that extends the built-in Error class
class ApiError extends Error {
    // Constructor to initialize the ApiError instance
    constructor(
        statusCode,               // HTTP status code for the error
        message = "something went wrong", // Default error message
        error = [],               // Optional additional error information
        stack = ""                // Optional stack trace
    ) {
        super(message);           // Call the parent constructor with the error message
        this.statusCode = statusCode; // Assign the provided status code to the instance
        this.message = message;
        this.error = error;       // Assign additional error information to the instance
        this.stack = stack;       // Assign the stack trace to the instance
    }
}


export {ApiError}