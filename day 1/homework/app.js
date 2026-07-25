//1. http module is the module that allows us to exchange information between server and client. client sends request, server gets it, processes it and then sends the client response
//2. request is the information that client sends to the server, and response is the information he gets from the server in exchange
//3. http.createServer() creates a server. it's main purpuse is to listen a certain port, process the requests and send the responses back to the client
//4. 
const http = require("http");
const server = http.createServer((req, res) => {
    res.end("Hello world");
})

server.listen(3000, () => {
    console.log("hello world")
})

//5. to launch the server you gotta use the method .listen(), to which you gotta pass the port to which server will listen and optionally can pass the callback function
//6. Node.js modules:
//http
//fs
//process
//os
//7. it is a specific URL address to which a client sends a request to the server
//8. the request consists of the:
//URL
//http methods
//headers
//request body
//9. http methods:
//GET
//POST
//PUT
//PATCH
//DELETE