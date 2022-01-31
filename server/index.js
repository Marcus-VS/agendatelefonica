const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = cors();

/*const db = mysql.createPool({
  host="",
  user="root",
  password="Marcus@Ghost20",
  database="agenda_DB",
});*/

app.use(cors());
app.use(express.json());

app.listen(5051, ()=>{
  console.log("rodando servidor");
});