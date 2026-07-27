const fs = require("fs");
//1
fs.readFile("products.json", "utf-8", (error, data) => {
    if(error){
        console.log(error);
        return;
    }
    const products = JSON.parse(data);
    products.forEach((product) => {
        console.log(product.name);
    });

});
//2
const products = JSON.parse(fs.readFileSync("products.json", "utf-8"));
products.push({
  "id": 4,
  "name": "Monitor",
  "price": 650,
  "inStock": true
});

fs.writeFileSync("products.json", JSON.stringify(products, 2, null));

//3
fs.readFile("students.json", "utf-8", (error, data) => {
    if(error){
        console.log(error);
        return;
    }
    const students = JSON.parse(data);
    const filtStudents = students.filter((student) => student.grade > 90);
    console.log(filtStudents);

})

//4
const students = JSON.parse(fs.readFileSync("students.json", "utf-8"));
students.forEach((student) => student.avtive = true);
fs.writeFileSync("students.json", JSON.stringify(students));

//5
const settings = JSON.parse(fs.readFileSync("settings.json", "utf-8"));
settings.theme = "dark";
settings.notifications = false;
fs.writeFileSync("settings.json", JSON.stringify(settings))