const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

//for cross site requests
app.use(cors())

//to parse jsons from apis in express
app.use(express.json());

//setting default directory search from public for views
app.use(express.static(__dirname + '/public'));

//port from environment, else 3030
const PORT = process.env.PORT || 3030

//didn't want to use react, so setting it up to ejs
app.set('view engine', "ejs");

//Redirect default to index
app.get('/', (req, res) => {
    res.redirect("/index")
})

//Render index
app.get("/index", (req, res) => {
    res.render("index")
})


const eventAPI = require("./routes/eventsApi")
app.use('/route', eventAPI)

const server = app.listen(PORT);