const express = require('express');
const path = require('path');
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 8800;

app.use(bodyParser.json());
app.use(cors());

// index.html 파일을 제공합니다.
app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, 'index.html'));
});

// GET TEST
app.get('/input', function(req, res) {
    console.log('TEST GET - input');

    console.log(' req.body', JSON.stringify(req.body));
    console.log(' req.headers', JSON.stringify(req.headers));

    console.log('TEST - parameter, header')
    const paramValue1 = req.query.param1;
    const userId = req.headers.userId;
    console.log(paramValue1, userId);
    
    return res.status(200).json({});
});

// POST TEST
app.post('/input', function(req, res) {
    console.log('TEST POST - input');

    console.log(' req.body', JSON.stringify(req.body));
    
    return res.status(200).json({});
});

// 서버를 시작합니다.
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
