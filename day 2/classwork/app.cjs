//1. os module is a module that gives us possibility to get information about our operative system
//2. fs module is a module that helps us to work with files: read it, create, rewrite etc.
//3. .cpus(); .arch(); .totalmem(); freemem(); .uptime();
//4. 
const fs = require("fs");
const user = {
    "name": "taso",
    "lastname": "basiladze",
    "age": 16
}
fs.writeFileSync("user.json", JSON.stringify(user, null, 2));

//5. 
const data = fs.readFileSync("user.json", "utf-8");
const jsonData = JSON.parse(data)
jsonData.skills = ["JavaScript", "Node.js"]
fs.writeFileSync("user.json", JSON.stringify(jsonData, null, 2));
