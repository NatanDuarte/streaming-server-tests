require('dotenv').config()
const express = require('express');
const app = express();

app.use(express.urlencoded());

app.post('/auth', (req, res) => {
    const streamKey = req.body.key;

    if (streamKey == 'my_stream_key') {
        res.status(200).send();
        return;
    }

    res.status(403).send();
});

port = process.env.SERVER_PORT | 8000;

app.listen(port, () => {
    console.log(`listening at port ${port}`);
})
