
const http = require('http');               //import http sebagai protokol
const express = require('express');         //import express ke dalam variable

const path = require('path');               
const {dirname} = require('path');

const hbs = require('hbs');                 //html template sebgai tampilan

//menggunakan express
const app = express();                      //sebgagai penampung function dari si express
app.use(express.json());

//setting HBS enggine
app.set('view engine', 'hbs');

app.use('/public', express.static(path.join(__dirname, 'public')))

//buat end point
app.get('/', function (req, res) {
    const nama = "gandi purna jen"
    res.render('index', {
        nama: nama,
        umur: 21,
        hobi: "makan"
    })
}) 



//setting port dan server
const port = 3000;
const server = http.createServer(app);
server.listen(port);
console.log("server runing on port :" + port);




