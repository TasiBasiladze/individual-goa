const Database = require("better-sqlite3");
const db = new Database("database.db");

db.prepare(`
    CREATE TABLE IF NOT EXISTS customers(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name TEXT,
    email TEXT,
    age INTEGER
    );
`).run()

const stmt = db.prepare(`
    INSERT INTO customers (full_name, email, age) VALUES (?, ?, ?)
`)
stmt.run("Taso Basiladze", "taso@gmail.com", 16)
stmt.run("Mari Basiladze", "mari@gmail.com", 18)
stmt.run("Anna", "anna@gmail.com", 19)

db.prepare(`
    CREATE TABLE IF NOT EXISTS movies(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    genre TEXT,
    rating REAL
    );
`).run()

const stmt2 = db.prepare(`
    INSERT INTO movies (title, genre, rating) VALUES (?, ?, ?)
`)

stmt2.run("Shadow of the Ember", "Fantasy", 8.7)
stmt2.run("Midnight Frequency", "Sci-Fi, Thriller", 7.9)
stmt2.run("The Last Lighthouse", "Drama", 8.3)
stmt2.run("Crimson Pursuit", "Action, Crime", 7.5)
stmt2.run("Echoes of Tomorrow", "Mystery, Sci-Fi", 9.1)

db.prepare(`
    CREATE TABLE IF NOT EXISTS phones(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT,
    model TEXT,
    price REAL
    );
`).run()

const stmt3 = db.prepare(`
    INSERT INTO phones (brand, model, price) VALUES (?, ?, ?)
`)

stmt3.run("Apple", "iPhone 15", 999.99)
stmt3.run("Samsung", "Galaxy S24", 899.99)
stmt3.run("Google", "Pixel 9", 799.99)
stmt3.run("Xiaomi", "Redmi Note 14", 349.99)


db.prepare(`
    CREATE TABLE IF NOT EXISTS teachers(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT,
    last_name TEXT,
    subject TEXT,
    salary REAL
    );
`).run()

const stmt4 = db.prepare(`
    INSERT INTO teachers (first_name, last_name, subject, salary) VALUES (?, ?, ?, ?)
`)

stmt4.run("Nino", "Beridze", "Mathematics", 1800)
stmt4.run("Giorgi", "Lomidze", "History", 1700)
stmt4.run("Mariam", "Kapanadze", "English", 1900)


db.prepare(`
    CREATE TABLE IF NOT EXISTS games(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    game_name TEXT,
    category TEXT,
    price REAL
    );
`).run()

const stmt5 = db.prepare(`
    INSERT INTO games (game_name, category, price) VALUES (?, ?, ?)
`)

stmt5.run("Minecraft", "Sandbox", 29.99)
stmt5.run("The Witcher 3", "RPG", 39.99)
stmt5.run("Valorant", "Shooter", 0)
stmt5.run("Stardew Valley", "Simulation", 14.99)
stmt5.run("Hollow Knight", "Metroidvania", 14.99)
stmt5.run("Celeste", "Platformer", 19.99)
