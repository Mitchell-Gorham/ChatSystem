const express = require('express');
const app = express();
const cors = require('cors')
const http = require('http').Server(app);
const io = require('socket.io')(http);
const sockets = require('./socket.js');
const server = require('./listen.js');
const bodyParser = require('body-parser');

const { loginParse } = require('./server_data/dbAuth');

const PORT = 3000;  //Define port used for the server

app.use(cors());   //Apply express middleware
app.use(bodyParser.json());

sockets.connect(io, PORT);  //Setup Socket
server.listen(http, PORT);  //Start server listening for requests

app.post("/login", async function (req, res) {
    try {
        console.log(req.body);
        const { email, pass } = req.body;
        const succeeded = await loginParse(email, pass);
        if (succeeded) { 
            res.json(true);
        } else {
            res.json(false);
        }
    } catch (err) {
        console.warn(err)
        res.status(500).json("Something went Wrongly")
    }
});

//Route for default page (root of site)
app.get('/',function(req,res){
    res.sendFile(__dirname + '/../src/app/login/login.component.html');
});
