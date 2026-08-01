const Database = require("better-sqlite3");
const db = new Database("database.db");

db.prepare(`
    CREATE TABLE IF NOT EXISTS books(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    author TEXT,
    pages INTEGER,
    price REAL
    );
`).run()

const stmt1 = db.prepare(`
    INSERT INTO books (title, author, pages, price) VALUES (?, ?, ?, ?)
`)

stmt1.run("The Hobbit", "J.R.R. Tolkien", 310, 19.99)
stmt1.run("1984", "George Orwell", 328, 14.99)
stmt1.run("The Little Prince", "Antoine de Saint-Exupéry", 96, 9.99)
stmt1.run("Pride and Prejudice", "Jane Austen", 432, 12.99)
stmt1.run("The Alchemist", "Paulo Coelho", 208, 15.99)


db.prepare(`
    CREATE TABLE IF NOT EXISTS employees(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT,
    last_name TEXT,
    position TEXT,
    salary REAL
    );
`).run()

const stmt2 = db.prepare(`
    INSERT INTO employees (first_name, last_name, position, salary) VALUES (?, ?, ?, ?)
`)

stmt2.run("Taso", "Basiladze", "Frontend Developer", 2500)
stmt2.run("Nino", "Beridze", "Designer", 2200)
stmt2.run("Giorgi", "Lomidze", "Backend Developer", 2800)
stmt2.run("Mariam", "Kapanadze", "Project Manager", 3200)


db.prepare(`
    CREATE TABLE IF NOT EXISTS cars(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT,
    model TEXT,
    year INTEGER,
    price REAL
    );
`).run()

const stmt3 = db.prepare(`
    INSERT INTO cars (brand, model, year, price) VALUES (?, ?, ?, ?)
`)

stmt3.run("Toyota", "Corolla", 2022, 24000)
stmt3.run("BMW", "X5", 2021, 62000)
stmt3.run("Mercedes-Benz", "C-Class", 2023, 51000)
stmt3.run("Honda", "Civic", 2020, 22000)
stmt3.run("Tesla", "Model 3", 2024, 43000)
stmt3.run("Ford", "Mustang", 2021, 48000)


db.prepare(`
    CREATE TABLE IF NOT EXISTS courses(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    course_name TEXT,
    instructor TEXT,
    duration TEXT,
    price REAL
    );
`).run()

const stmt4 = db.prepare(`
    INSERT INTO courses (course_name, instructor, duration, price) VALUES (?, ?, ?, ?)
`)

stmt4.run("JavaScript Basics", "John Smith", "8 weeks", 199.99)
stmt4.run("React Development", "Emma Brown", "10 weeks", 299.99)
stmt4.run("Node.js Essentials", "David Wilson", "6 weeks", 179.99)
stmt4.run("UI/UX Design", "Sophia Johnson", "12 weeks", 249.99)


db.prepare(`
    CREATE TABLE IF NOT EXISTS restaurants(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    restaurant_name TEXT,
    cuisine TEXT,
    rating REAL,
    city TEXT
    );
`).run()

const stmt5 = db.prepare(`
    INSERT INTO restaurants (restaurant_name, cuisine, rating, city) VALUES (?, ?, ?, ?)
`)

stmt5.run("Bella Italia", "Italian", 4.8, "Tbilisi")
stmt5.run("Sakura", "Japanese", 4.7, "Batumi")
stmt5.run("Spice House", "Indian", 4.6, "Kutaisi")
stmt5.run("El Toro", "Mexican", 4.5, "Rustavi")
stmt5.run("Le Gourmet", "French", 4.9, "Tbilisi")

const books = db.prepare(`
    SELECT * FROM books
`).all()
console.log(books)

const employees = db.prepare(`
    SELECT first_name, position FROM employees
`).all()
console.log(employees)

const cars = db.prepare(`
    SELECT * FROM cars
    WHERE price > 20000
`).all()
console.log(cars)

const courses = db.prepare(`
    SELECT * FROM courses
    WHERE price < 100
`).all()
console.log(courses)

const restaurants = db.prepare(`
    SELECT * FROM restaurants
    WHERE rating > 4
`).all()
console.log(restaurants)