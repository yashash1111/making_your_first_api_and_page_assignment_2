const express = require('express');
const app = express();

/*
Task:
You need to create an API that helps users understand different HTTP status codes and their meanings.
*/

// Map of HTTP status codes and their d
// escriptions
const statusCodes = {
    200: "OK: The request has succeeded. The meaning of this status depends on the HTTP method used.",
    201: "Created: The request has been fulfilled and has resulted in the creation of a new resource.",
    204: "No Content: The server successfully processed the request, but is not returning any content.",
    400: "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax).",
    401: "Unauthorized: The request requires user authentication.",
    403: "Forbidden: The server understood the request, but it refuses to authorize it.",
    404: "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource.",
    405: "Method Not Allowed: The request method is not supported by the server for the requested resource.",
    429: "Too Many Requests: The user has sent too many requests in a given amount of time (rate limiting).",
    500: "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.",
    502: "Bad Gateway: The server received an invalid response from the upstream server.",
    503: "Service Unavailable: The server is not ready to handle the request. Common causes include maintenance or server overload.",
    504: "Gateway Timeout: The server is acting as a gateway and did not receive a timely response from the upstream server."
};

// GET endpoint to handle status code descriptions
app.get('/status-info', (req, res) => {
    const code = req.query.code; // Extract 'code' query parameter

    // Check if the code exists in our statusCodes map
    if (statusCodes[code]) {
        res.status(200).json({
            status: parseInt(code),
            message: statusCodes[code]
        });
    } else {
        // Respond with an error if the status code is not handled
        res.status(400).json({
            error: "Invalid or unsupported status code. Please provide a valid HTTP status code."
        });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});