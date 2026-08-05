const Database = require("better-sqlite3");
const db = new Database("database.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        age INTEGER
    )
`);

const stmt = db.prepare(`
    INSERT INTO users (name, age)
    VALUES (?, ?)
`);

stmt.run("Luka", 18);
stmt.run("Nino", 21);
stmt.run("Giorgi", 25);
stmt.run("Mariam", 19);
stmt.run("Ana", 23);
stmt.run("Saba", 20);
stmt.run("Elene", 22);
stmt.run("Dato", 27);
stmt.run("Tako", 24);
stmt.run("Irakli", 26);

const users1 = db.prepare(`
    SELECT * FROM users
    WHERE name LIKE 'N%'
`).all()

const users2 = db.prepare(`
    SELECT * FROM users
    WHERE name LIKE '%a'
`).all()

const users3 = db.prepare(`
    SELECT * FROM users
    WHERE name LIKE '%ik%'
`).all()

const users4 = db.prepare(`
    SELECT * FROM users
    WHERE name LIKE '____'
`).all()

const users5 = db.prepare(`
    SELECT * FROM users
    WHERE name LIKE '_i%'
`).all()

const users6 = db.prepare(`
    SELECT * FROM users
    WHERE name LIKE 'M%'
`).all()

const users7 = db.prepare(`
    SELECT * FROM users
    WHERE name LIKE '%o%'
`).all()

const users8 = db.prepare(`
    SELECT * FROM users
    WHERE name LIKE 'A%a'
`).all()

const users9 = db.prepare(`
    SELECT * FROM users
    WHERE name LIKE 'N%o%'
`).all()

const users10 = db.prepare(`
    SELECT * FROM users
    WHERE name LIKE '____a'
`).all()

console.log(users1);
console.log(users2);
console.log(users3);
console.log(users4);
console.log(users5);
console.log(users6);
console.log(users7);
console.log(users8);
console.log(users9);
console.log(users10);