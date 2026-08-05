const Database = require("better-sqlite3");
const db = new Database("database.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS students(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        age INTEGER,
        score REAL,
        city TEXT
    )
`)

const stmt = db.prepare(`
    INSERT INTO students (name, age, score, city) VALUES (?, ?, ?, ?)
`)

stmt.run('Emma Johnson', 16, 91.5, 'Tbilisi');
stmt.run('Liam Carter', 17, 84.2, 'Batumi');
stmt.run('Sofia Martinez', 15, 96.8, 'Kutaisi');
stmt.run('Noah Wilson', 16, 73.4, 'Sydney');
stmt.run('Ava Brown', 17, 88.9, 'Rustavi');
stmt.run('Ethan Davis', 19, 67.3, 'Dublin');
stmt.run('Mia Thompson', 16, 94.6, 'Gori');
stmt.run('Lucas Anderson', 17, 79.1, 'Amsterdam');
stmt.run('Isabella Moore', 15, 82.7, 'Zugdidi');
stmt.run('James Taylor', 16, 99.4, 'Telavi');

const select1 = db.prepare(`
    SELECT * FROM students
    WHERE age > 18 AND score > 80
`).all()

const select2 = db.prepare(`
    SELECT * FROM students
    WHERE age < 18 OR score > 90
`).all()

const select3 = db.prepare(`
    SELECT * FROM students
    WHERE NOT city = 'Tbilisi'
`).all()

const select4 = db.prepare(`
    SELECT * FROM students
    WHERE score BETWEEN 70 AND 90
`).all()

const select5 = db.prepare(`
    SELECT * FROM students
    WHERE city IN ('Tbilisi', 'Batumi', 'Kutaisi')
`).all()

const select6 = db.prepare(`
    SELECT * FROM students
    WHERE city NOT IN ('Tbilisi', 'Batumi')
`).all()

const select7 = db.prepare(`
    SELECT * FROM students
    WHERE name LIKE 'N%'
`).all()

const select8 = db.prepare(`
    SELECT * FROM students
    WHERE age LIKE '1_'
`).all()

const select9 = db.prepare(`
    SELECT * FROM students
    WHERE name LIKE 'B___'
`).all()

const select10 = db.prepare(`
    SELECT * FROM students
    WHERE score LIKE '9_'
`).all()


console.log(select1);
console.log(select2);
console.log(select3);
console.log(select4);
console.log(select5);
console.log(select6);
console.log(select7);
console.log(select8);
console.log(select9);
console.log(select10);

