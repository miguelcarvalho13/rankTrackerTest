const express = require('express');
const app = express();

app.use(express.static('public'));

app.post('/new.js?', (req, res) => {
    console.log(req, res);
    res.json({result: true});
});

app.listen(3000, () => {
    console.log("server listening on port 3000");
});
