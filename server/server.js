require('dotenv/config')
const express = require("express");
const app = express();
const ctrl = require("./controller");
const massive = require('massive')
const {port, Connection_String} = process.env

app.use(express.json());

app.get("/api/styles", ctrl.getData);
app.post("/api/styles", ctrl.addStyle);
app.delete("/api/styles/:id", ctrl.delete);
app.put("/api/styles/:id", ctrl.styleUpdate);

//crud and express/port set up (backend)
massive(Connection_String).then(db => {
  app.set("db", db);
  app.listen(port, () => console.log(`Did you ${port}`));
});
