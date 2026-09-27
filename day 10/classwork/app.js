const Database = require("better-sqlite3");
const db = new Database("database.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        price REAL
    )
`);

const stmt = db.prepare(`
    INSERT INTO products (title, price)
    VALUES (?, ?)
`);

stmt.run("Laptop", 1200.0);
stmt.run("Smartphone", 800.0);
stmt.run("Headphones", 150.0);
stmt.run("Monitor", 300.0);
stmt.run("Keyboard", 100.0);
stmt.run("Mouse", 50.0);

const products = db.prepare(`
    SELECT * FROM products
    ORDER BY price DESC
`).all();

const cheapproducts = db.prepare(`
    SELECT * FROM products
    ORDER BY price ASC
    LIMIT 5 OFFSET 2`
).all();

const allProducts = db.prepare(`
    SELECT COUNT(price) AS product_count FROM products
    WHERE price IS NOT NULL
`).all();

const priceProducts = db.prepare(`
    SELECT SUM(price) AS total_price, AVG(price) AS avarage_price FROM products`
).all()

const minAndMaxPrice = db.prepare(`
    SELECT MIN(price) AS min_price, MAX(price) AS max_price FROM products
`).all()

console.log(products);
console.log(cheapproducts);
console.log(allProducts);
console.log(priceProducts);
console.log(minAndMaxPrice);