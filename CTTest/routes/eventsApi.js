const router = require('express').Router();

router.post('/events', (req, res) => {
    console.log(JSON.stringify(req.body))
})