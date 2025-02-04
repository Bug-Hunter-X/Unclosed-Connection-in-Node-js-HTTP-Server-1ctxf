# Unclosed Connection in Node.js HTTP Server

This repository demonstrates a common error in Node.js where an HTTP server keeps the connection alive indefinitely. This can lead to resource exhaustion and an unresponsive server.

## Bug

The `bug.js` file contains a Node.js HTTP server that sends a large response body and fails to close the connection properly.  This results in the server holding onto the connection, preventing new requests from being handled. 

## Solution

The `bugSolution.js` file demonstrates the correct way to handle this scenario.  By calling `res.end()`, the server properly closes the connection after sending the response, preventing resource exhaustion and ensuring the server remains responsive.

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js`.  After making a request to the server, observe the effect on the server's responsiveness. 
3. Run `node bugSolution.js`. Observe the improved behaviour.

## Lessons Learned

Always ensure that you call `res.end()` in your Node.js HTTP server to properly close the connection after sending a response. Failing to do so can lead to serious performance issues and server unresponsiveness.