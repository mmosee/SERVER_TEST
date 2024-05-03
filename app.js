const express = require('express');
const path = require('path');

const app = express();
const port = 8800;

// index.html 파일을 제공합니다.
app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, 'index.html'));
});

// GET TEST
app.get('/input', function(req, res) {
    console.log('TEST GET - input');

    console.log(' req.body', JSON.stringify(req.body));
    
    return res.status(200).json({});
});

// 서버를 시작합니다.
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
