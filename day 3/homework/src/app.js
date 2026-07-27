const express = require("express");
const app = express();
app.use(express.json());
const users = [
  {
    id: 1,
    name: "Nino",
    age: 18,
  },
  {
    id: 2,
    name: "Luka",
    age: 22,
  },
  {
    id: 3,
    name: "Ana",
    age: 16,
  },
  {
    id: 4,
    name: "Giorgi",
    age: 25,
  },
  {
    id: 5,
    name: "Mariam",
    age: 20,
  },
];

//1
app.get("/users", (req, res) => {
    res.json(users);
});

//2
app.get("/users/:id", (req, res) => {
    const { id } = req.params;
    const user = users.find(user => user.id == id);
    if(!user){
        res.status(404).json({"message": "user not found"});
        return;
    }
    res.json(user);
});

//3
app.post("/user", (req, res) => {
    const { name, age } = req.body;
    users.push(
        {
            id: users.length > 0 ? users.at(-1).id + 1 : 1,
            name: name,
            age: age
        }
    )
    res.json({"message": "user added succeccfully"});
});

//4
app.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const {name, age} = req.body;
    const user = users.find(user => user.id == id);
    if(!user){
        res.status(404).json({"message": "user not found"});
        return;
    }
    user.name = name;
    user.age = age;
    res.json({"message": "user info changed successfully"});
});

//5
app.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex(user => user.id == id);
    if(userIndex === -1){
        res.status(404).json({"message": "user not found"});
        return;
    }
    users.splice(userIndex, 1);
    res.json({"message": "user deleted successfully"});
});

app.listen(3000, () =>{
    console.log("server is listening...");
});