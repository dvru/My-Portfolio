const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(express.static(__dirname + '/public'))

app.listen(3002)










// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json())

// app.get('/:id', (req, res) => {
//     console.log(req.params)
//     res.status(404).send("not found");
// })

// app.get('/profile', (req, res) => {
//     res.send("getting profile");
// })

// app.post('/profile', (req, res) => {
//     console.log(req.body)
//     res.send('Success');
// })

