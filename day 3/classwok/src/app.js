// const EventEmitter = require("events");
// const emitter = new EventEmitter()

// //1
// emitter.on("welcome", (name) => {
//     console.log(`Welcome, ${name}!`)
// })

// emitter.emit("welcome", "Taso");

// //2
// emitter.on("login", (obj) => {
//     console.log(`${obj.username}, ${obj.role}`)
// })

// emitter.emit("login", {username: "Taso", role: "admin"});

// //3
// emitter.on("orderCreated", () => {
//     console.log("Order created")
// })

// emitter.on("orderCreated", () => {
//     console.log("Email sent")
// })

// emitter.on("orderCreated", () => {
//     console.log("Stock updated")
// })

// emitter.emit("orderCreated")

// //4
// emitter.once("logout", () => {
//     console.log("logged out")
// })

// emitter.emit("logout")
// emitter.emit("logout")
// emitter.emit("logout")

const express = require("express");
const app = express();
const usersRouter = require()

app.get("/users", (req, res) => {
    const {  } = req.body
    res.status().send()
})

app.listen(3000, () => {
    console.log("server is listening...")
})