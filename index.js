const express = require('express');
const http = require('http');
const app = express();
const updateUser = require('./controllers/users').updateUser;
const cors = require('cors')
app.use(cors())
app.use("/users", require("./routes/users/v1a"));

const server =  http.createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: "*"
    }
});

io.on('connection', socket => {

    socket.on('join', ({body}, callback) => {
        console.log(body);
        // const {error, user} = updateUser(body);
        // if (error) callback(error);
        // socket.emit('updatedUser', {user});
        callback();
    })
})


const port = process.env.PORT || 3002;
const hostname = 'localhost';
server.listen(port, err => {
    if(err){
        return console.log("Error", err)
    }
    console.log(`Backend Server running on http://${hostname}:${port} ...`)
});