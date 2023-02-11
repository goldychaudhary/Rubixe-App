
const express = require("express");

const {open} = require("sqlite");
const path = require("path")
const sqlite3 = require("sqlite3")

let db = null ;

const initializeDatabase = async () => {
    try{
        db = await open({
            filename: path.join(__dirname, "users.db"),
            driver: sqlite3.Database
        });
        server.listen(5000, () => {
            console.log(`Server is running on port ${5000}`);
        });
    }
    catch(e){
        console.log("DB ERROR", e.message)
        process.exit(1);
    }
}

initializeDatabase()



const server = express();
server.use(express.json());



server.post("/api/signup", async (req, res) => {
    const {name, email , mobile} = req.body
    const registerUserQuery = `
       INSERT INTO users 
       (
        name, email, mobile
       )
       VALUES ("${name}", "${email}", ${mobile})
    `
    await db.run(registerUserQuery);
    res.status(200).json({ message: "USER ADDED SUCCESSFULLY" });
    
});
