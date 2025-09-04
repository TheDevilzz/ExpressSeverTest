const express = require('express');
const debug = require('debug')('app');
const app = express();
const morgan = require('morgan');
const port = 3000;
const path = require('path');
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '/public/')));
app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    debug(`Example app listening at http://localhost:${port}`);
});