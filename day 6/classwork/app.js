const Database = require("better-sqlite3");
const db = new Database("database.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS students(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        full_name TEXT,
        age INTEGER,
        grade REAL
    );
`)

const stmt = db.prepare(`
    INSERT INTO students (full_name, age, grade) VALUES (?, ?, ?);
`);

stmt.run("Taso Basilazde", 16, 100.0);
stmt.run("Mari Basiladze", 18, 90.3);
stmt.run("Anna", 17, 70.5);
stmt.run("elene", 19, 79.0);
stmt.run("gio", 16, 99.8);

const allStudents = db.prepare(`
    SELECT * FROM students
`).all();

const eigtheenYearsOldStudents = db.prepare(`
    SELECT * FROM students
    WHERE age = 18
`).all()

const underAgeStudents = db.prepare(`
    SELECT * FROM students
    WHERE age < 18
`).all()

const excselentStudents = db.prepare(`
    SELECT * FROM students
    WHERE grade > 80
`).all()

console.log(allStudents)
console.log(eigtheenYearsOldStudents)
console.log(underAgeStudents)
console.log(excselentStudents)

db.exec(`
    CREATE TABLE IF NOT EXISTS products(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        product_name TEXT,
        price REAL,
        category TEXT
    );
`)

const stmt2 = db.prepare(`
    INSERT INTO products (product_name, price, category) VALUES (?, ?, ?);
`);

stmt2.run("iPhone 15", 999.99, "Electronics");
stmt2.run("Laptop", 1200.00, "Electronics");
stmt2.run("Office Chair", 180.00, "Furniture");
stmt2.run("Coffee Mug", 15.99, "Kitchen");
stmt2.run("Headphones", 89.99, "Electronics");
stmt2.run("Backpack", 65.00, "Accessories");

const allProducts = db.prepare(`
    SELECT * FROM products
`).all();

const expensiveProducts = db.prepare(`
    SELECT * FROM products
    WHERE price > 100
`).all();

const electronicsProducts = db.prepare(`
    SELECT * FROM products
    WHERE category = 'Electronics'
`).all();

const productsBetween50And500 = db.prepare(`
    SELECT * FROM products
    WHERE price > 50 AND price < 500
`).all();

const productsNot100 = db.prepare(`
    SELECT * FROM products
    WHERE price != 100
`).all();

console.log(allProducts);
console.log(expensiveProducts);
console.log(electronicsProducts);
console.log(productsBetween50And500);
console.log(productsNot100);