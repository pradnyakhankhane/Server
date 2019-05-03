const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
app.use(function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Methods", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

function connect() {
    const connection = mysql.createConnection({
        host: '192.168.42.149',
        user: 'root',
        password: 'password',
        database: 'docker',
        port : 8086
        
    });

    connection.connect();

    return connection;
}



app.get('/product', (request, response) => {
    const connection = connect();
    const statement = `select * from product`;
    connection.query(statement, (error, products) => {
        console.log(error);
        response.send(products);
    })
}) 

app.listen(3000,'0.0.0.0', () => {
    console.log(`Server started on 4000`);
});









