const Database = require("better-sqlite3");
const db = new Database("database.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        price REAL,
        category TEXT
    )
`);

const stmt = db.prepare(`
    INSERT INTO products (title, price, category)
    VALUES (?, ?, ?)
`);

stmt.run("Laptop", 1200.0, "Electronics");
stmt.run("Smartphone", 800.0, "Electronics");
stmt.run("Headphones", 150.0, "Electronics");
stmt.run("Monitor", 300.0, "Electronics");
stmt.run("Keyboard", 100.0, "Electronics");
stmt.run("Mouse", 50.0, "Electronics");
stmt.run("Backpack", 80.0, "Accessories");
stmt.run("T-Shirt", 30.0, "Clothing");
stmt.run("Jeans", 70.0, "Clothing");
stmt.run("Coffee Maker", 200.0, "Kitchen");
stmt.run("Chair", 180.0, null);
stmt.run("Notebook", 10.0, null);


//1

const products = db.prepare(`
    SELECT title, price FROM products
    ORDER BY price ASC
`).all();


// 2

const expensiveProducts = db.prepare(`
    SELECT * FROM products
    ORDER BY price DESC
    LIMIT 10 OFFSET 3
`).all();


// 3

const allProducts = db.prepare(`
    SELECT COUNT(title) AS product_count FROM products
`).all();

const productsWithCategory = db.prepare(`
    SELECT COUNT(category) AS products_with_category FROM products
    WHERE category IS NOT NULL
`).all();


// 4

const priceProducts = db.prepare(`
    SELECT SUM(price) AS total_price, AVG(price) AS average_price FROM products
`).all();


// 5

const minAndMaxPrice = db.prepare(`
    SELECT MAX(price) AS max_price, MIN(price) AS min_price FROM products
    WHERE category = 'Electronics'
`).all();


// 6

const productsAbove100 = db.prepare(`
    SELECT COUNT(price) AS above_100 FROM products
    WHERE price > 100
`).all();

const productsBelow100 = db.prepare(`
    SELECT COUNT(price) AS below_100 FROM products
    WHERE price < 100
`).all();

// 7

const sevenProducts = db.prepare(`
    SELECT title, price FROM products
    WHERE price IS NOT NULL
    ORDER BY price DESC LIMIT 7
`).all();


console.log(products);
console.log(expensiveProducts);
console.log(allProducts);
console.log(productsWithCategory);
console.log(priceProducts);
console.log(minAndMaxPrice);
console.log(productsAbove100);
console.log(productsBelow100);
console.log(sevenProducts);