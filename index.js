const express = require('express')
const app = express()
const PORT = 3000
app.set('view engine', 'ejs');

const userList = ["Thomas","Charlotte", "Julien"]


app.get('/', function(req , res){
    // res.sendFile(__dirname + '/public/index.html')
    res.render('index', {
        title: "FROM node express",
        userList: userList
    })
})
app.get('/thomas', function(req , res){
    res.send('Hello thomas the boss')
})
app.get('/hello', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT, function() {
    console.log(`Starting server on port ${PORT}`)
})