// Define a class 'ApiResponse' to standardize API response structure
class ApiResponse {
    // Constructor to initialize the ApiResponse instance
    constructor(statusCode, data, message = "success") {
        // Assign the provided statusCode to the instance property
        this.statusCode = statusCode;
        // Assign the provided data to the instance property
        this.data = data;
        // Assign the provided message to the instance property, defaulting to "success"
        this.message = message;
        // Determine success based on the status code (true if < 400)
        this.success = statusCode < 400;
    }
}


export {ApiResponse}