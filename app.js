const express = require('express');
const app = express();
const cors= require("cors");
const corsOptions ={
    origin:'*', 
    optionSuccessStatus:200,
 }

app.use(cors(corsOptions))
app.use(require('body-parser').json());

const n2dlogo = `
███╗   ██╗███████╗████████╗██████╗ ██████╗ ███████╗██╗   ██╗
████╗  ██║██╔════╝╚══██╔══╝╚════██╗██╔══██╗██╔════╝██║   ██║
██╔██╗ ██║█████╗     ██║    █████╔╝██║  ██║█████╗  ██║   ██║
██║╚██╗██║██╔══╝     ██║   ██╔═══╝ ██║  ██║██╔══╝  ╚██╗ ██╔╝
██║ ╚████║███████╗   ██║   ███████╗██████╔╝███████╗ ╚████╔╝ 
╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚══════╝╚═════╝ ╚══════╝  ╚═══╝  
`

const { readDbData, fetchDbData, writeDbData } = require('./interface');

app.post("/readdb", function (req, res) {
    const db = req.body.database;
    return new Promise((resolve, reject) => {
      readDbData(db).then((response) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Cache-Control", "max-age=180000");
      res.end(JSON.stringify(response));
      resolve();
    }).catch((error) => {
      res.json(error);
      res.status(405).end();
    });
});
});

app.post("/fetchfromdb", function (req, res) {
    const db = req.body.database;
    const key = req.body.key;
    const entry = req.body.entry;
    return new Promise((resolve, reject) => {
      fetchDbData(db,key,entry).then((response) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Cache-Control", "max-age=180000");
      res.end(JSON.stringify(response));
      resolve();
    }).catch((error) => {
      res.json(error);
      res.status(405).end();
    });
});
});

app.post("/sendtodb", function (req, res) {
    const db = req.body.database;
    const entry = req.body.entry;
    return new Promise((resolve, reject) => {
      writeDbData(db, entry).then((response) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Cache-Control", "max-age=180000");
      res.end(JSON.stringify(response));
      resolve();
    }).catch((error) => {
      res.json(error);
      res.status(405).end();
    });
});
});

const server = app.listen(5000, function() {
    const port = server.address().port;
    console.log('')
    console.log(n2dlogo);
    console.log('')
    console.log('Database Server Listening on Port: ' + port)
})





