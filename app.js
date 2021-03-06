const express = require('express')
const bodyParser = require('body-parser')
const exphbs  = require('express-handlebars')

const app = express()

app.use(express.static('public'))


app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
 
app.get('/', function (req, res) {
    res.render('UTC2')
});

app.get('/finland', function (req, res) {
    res.render('finland')
});

app.get('/sweden', function (req, res) {
    res.render('sweden')
});

app.get('/norway', function (req, res) {
    res.render('norway')
});

app.get('/iceland', function (req, res) {
    res.render('iceland')
});

app.get('/denmark', function (req, res) {
    res.render('denmark')
});

app.get('/UTC0', function (req, res) {
    res.render('UTC0')
});

app.get('/UTC1', function (req, res) {
    res.render('UTC1')
});

app.get('/UTC2', function (req, res) {
    res.render('UTC2')
});
 
app.listen(3000)