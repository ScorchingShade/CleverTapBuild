const express = require('express')
const app = express();
const cors = require('cors')

require('dotenv').config()


app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/public'));



(async() => {

    const PORT = process.env.PORT || 3030;
    app.get("/", (req, res) => {
        res.render("index");
    })

    app.listen(PORT, () => {
        console.log(`Server Running on port ${PORT}`)
    })

})();