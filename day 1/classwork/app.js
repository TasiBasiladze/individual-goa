const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome")
})

app.get("/about", (req, res) => {
    res.send("About Page")
})

app.get("/contact", (req, res) => {
    res.send("contact Page")
})


app.post("/users", express.json(), (req, res) => {
    res.json(req.body())
})

const users = [];

app.post("/users2", express.json(), (req, res) => {
    users.push(req.body());
    res.send("you added user successsfully")
})

app.get("/users2", (req, res) => {
    res.send(users);
})

app.listen(3000, () => {
    console.log("server is listening...")
})