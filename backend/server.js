//könyvtárak importálása
const express = require("express");
const cors = require("cors");
const app = express();
const mysql2 = require("mysql2");
 
//középrétegek beállítása
app.use(cors());
app.use(express.json());
 
//adatbázis kapcsolat létrehozása
const db = mysql2.createConnection({
    host: "localhost",    
    user: "root",
    password: "",
    database: "fogado",
    port: "3307"
});
 
//A szerver működésének ellenőrzése
app.get("/", (req, res) => {
    res.json("Szerver működik");
});
//szobák adatainak a lekérdezése
app.get("/szobak/", (req, res) => {
    const sql = "SELECT szobak.sznev, szobak.agy FROM szobak;";
    db.query(sql, (err, result) => {
        if (err) return res.json("Hiba a lekérdezés során");
        return res.json(result);
    });
});
//egy adott szoba adatainak a lekérdezése
app.get("/szobak/:szoba", (req, res) => {
    const sql = "SELECT szobak.sznev, szobak.agy FROM szobak where szobak.sznev = ?;";
    db.query(sql,[req.params.szoba], (err, result) => {
        if (err) return res.json("Hiba a lekérdezés során");
        return res.json(result);
    });
});
//vendégek adatainak a lekérdezése
app.get("/vendej", (req, res) => {
    const sql = "SELECT szobak.sznev, Count(foglalasok.vendeg) AS 'vendegek szama', SUM(foglalasok.tav-foglalasok.erk) AS 'foglalt éjszakák száma' FROM fogado.foglalasok join szobak ON szobak.szazon = foglalasok.szoba group by szobak.sznev ORDER BY Count(foglalasok.vendeg) ASC;";
    db.query(sql, (err, result) => {
        if (err) return res.json("Hiba a lekérdezés során");
        return res.json(result);
    });
});
//egy adott szobához tartozó foglalások lekérdezése
app.get("/foglalt/:szoba", (req, res) => {
    const sql = "select vendegek.vnev, foglalasok.erk, foglalasok.tav FROM fogado.foglalasok join vendegek ON vendegek.vsorsz = foglalasok.vendeg join szobak ON szobak.szazon = foglalasok.szoba where szobak.sznev = ? ORDER BY vnev asc;";
    db.query(sql, [req.params.szoba], (err, result) => {
        if (err) return res.json("Hiba a lekérdezés során");
        return res.json(result);
    });
});
//szerver indítása
app.listen(3001, () => {
    console.log("Szerver elindult a 3001-es porton");
});