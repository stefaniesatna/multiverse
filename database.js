import sqlite3 from "sqlite3"
import md5 from "md5"

const DBSOURCE = "db.sqlite"

export default const db = new sqlite3.Database(DBSOURCE, err => {
    if (err){
        // Cannot open database
        console.error(err.message)
        throw err
    } else {
        console.log("Connected to the SQLite database.")
        db.run(`CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT UNIQUE",
            password TEXT,
            CONSTRAINT email_unique UNIQUE (email)
            )`,
            (err) => {
                if (err) {
                    // Table already created
                } else {
                    // Table just created, creating some rows
                    let insert = `INSERT INTO user (name, email, password) VALUES (?, ?, ?)`
                    db.run(insert,
                        ["admin", "admin@example.com", md5("admin123456")])
                    db.run(insert,
                        ["user", "user@example.com", md5("user123456")])
                }
            }
        }

    }
})