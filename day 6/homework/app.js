const Database = require("better-sqlite3");
const db = new Database("database.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS books(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        author TEXT,
        price REAL
    );
`)

const stmt1 = db.prepare(`
    INSERT INTO books (title, author, price) VALUES (?, ?, ?);
`);

stmt1.run("The Hobbit", "J.R.R. Tolkien", 25);
stmt1.run("1984", "George Orwell", 18);
stmt1.run("The Little Prince", "Antoine de Saint-Exupéry", 9);
stmt1.run("Atomic Habits", "James Clear", 22);
stmt1.run("The Alchemist", "Paulo Coelho", 15);

const allBooks = db.prepare(`
    SELECT * FROM books
`).all();

const expensiveBooks = db.prepare(`
    SELECT * FROM books
    WHERE price > 20
`).all();

const cheapBooks = db.prepare(`
    SELECT * FROM books
    WHERE price < 10
`).all();

const not15Books = db.prepare(`
    SELECT * FROM books
    WHERE price != 15
`).all();

console.log(allBooks);
console.log(expensiveBooks);
console.log(cheapBooks);
console.log(not15Books);



db.exec(`
    CREATE TABLE IF NOT EXISTS cars(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        brand TEXT,
        model TEXT,
        year INTEGER
    );
`)

const stmt2 = db.prepare(`
    INSERT INTO cars (brand, model, year) VALUES (?, ?, ?);
`);

stmt2.run("Toyota", "Corolla", 2021);
stmt2.run("BMW", "X5", 2024);
stmt2.run("Honda", "Civic", 2014);
stmt2.run("Tesla", "Model 3", 2022);
stmt2.run("Ford", "Focus", 2018);

const newerCars = db.prepare(`
    SELECT * FROM cars
    WHERE year > 2020
`).all();

const olderCars = db.prepare(`
    SELECT * FROM cars
    WHERE year < 2015
`).all();

const cars2022 = db.prepare(`
    SELECT * FROM cars
    WHERE year = 2022
`).all();

const not2024Cars = db.prepare(`
    SELECT * FROM cars
    WHERE year != 2024
`).all();

console.log(newerCars);
console.log(olderCars);
console.log(cars2022);
console.log(not2024Cars);



db.exec(`
    CREATE TABLE IF NOT EXISTS games(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        game_name TEXT,
        genre TEXT,
        price REAL
    );
`)

const stmt3 = db.prepare(`
    INSERT INTO games (game_name, genre, price) VALUES (?, ?, ?);
`);

stmt3.run("GTA V", "Action", 60);
stmt3.run("Minecraft", "Sandbox", 30);
stmt3.run("The Witcher 3", "RPG", 40);
stmt3.run("Call of Duty", "Action", 70);
stmt3.run("Stardew Valley", "Simulation", 15);
stmt3.run("Elden Ring", "RPG", 80);

const expensiveGames = db.prepare(`
    SELECT * FROM games
    WHERE price > 50
`).all();

const mediumPriceGames = db.prepare(`
    SELECT * FROM games
    WHERE price > 20 AND price < 60
`).all();

const actionGames = db.prepare(`
    SELECT * FROM games
    WHERE genre = 'Action'
`).all();

const notRpgGames = db.prepare(`
    SELECT * FROM games
    WHERE genre != 'RPG'
`).all();

console.log(expensiveGames);
console.log(mediumPriceGames);
console.log(actionGames);
console.log(notRpgGames);



db.exec(`
    CREATE TABLE IF NOT EXISTS workers(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        full_name TEXT,
        position TEXT,
        salary REAL
    );
`)

const stmt4 = db.prepare(`
    INSERT INTO workers (full_name, position, salary) VALUES (?, ?, ?);
`);

stmt4.run("Taso Basiladze", "Developer", 3500);
stmt4.run("Mari Basiladze", "Manager", 4500);
stmt4.run("Anna Smith", "Designer", 1800);
stmt4.run("Gio Lomidze", "Manager", 3200);
stmt4.run("Nino Beridze", "Tester", 2500);

const highSalaryWorkers = db.prepare(`
    SELECT * FROM workers
    WHERE salary > 3000
`).all();

const lowSalaryWorkers = db.prepare(`
    SELECT * FROM workers
    WHERE salary < 2000
`).all();

const middleSalaryWorkers = db.prepare(`
    SELECT * FROM workers
    WHERE salary > 2000 AND salary < 4000
`).all();

const managers = db.prepare(`
    SELECT * FROM workers
    WHERE position = 'Manager'
`).all();

console.log(highSalaryWorkers);
console.log(lowSalaryWorkers);
console.log(middleSalaryWorkers);
console.log(managers);



db.exec(`
    CREATE TABLE IF NOT EXISTS phones(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        brand TEXT,
        model TEXT,
        price REAL
    );
`)

const stmt5 = db.prepare(`
    INSERT INTO phones (brand, model, price) VALUES (?, ?, ?);
`);

stmt5.run("Apple", "iPhone 16", 1300);
stmt5.run("Samsung", "Galaxy S25", 1100);
stmt5.run("Google", "Pixel 9", 900);
stmt5.run("Xiaomi", "Redmi Note 14", 400);
stmt5.run("Samsung", "Galaxy A56", 600);
stmt5.run("OnePlus", "12", 800);

const expensivePhones = db.prepare(`
    SELECT * FROM phones
    WHERE price > 1000
`).all();

const middlePricePhones = db.prepare(`
    SELECT * FROM phones
    WHERE price > 500 AND price < 1000
`).all();

const samsungPhones = db.prepare(`
    SELECT * FROM phones
    WHERE brand = 'Samsung'
`).all();

const notIphones = db.prepare(`
    SELECT * FROM phones
    WHERE brand != 'Apple'
`).all();

console.log(expensivePhones);
console.log(middlePricePhones);
console.log(samsungPhones);
console.log(notIphones);