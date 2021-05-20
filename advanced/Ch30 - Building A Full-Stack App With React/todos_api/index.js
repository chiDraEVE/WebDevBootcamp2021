var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');

let port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', function (req, res) {
    res.sendFile('views/index.html');
});

app.use('/api/todos', todoRoutes);

app.listen(port, function () {
    console.log("APP IS RUNNING ON PORT " + port);
})