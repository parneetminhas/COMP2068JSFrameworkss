const express = require('express');
const url = require('url');
const app = express();
const port = 3000; // or any other port you prefer
function calculate(req, res) {
    const queryObject = url.parse(req.url, true).query;
    const { method, x, y } = queryObject;

    let result;
    switch (method) {
        case 'add':
            result = parseFloat(x) + parseFloat(y);
            break;
        case 'subtract':
            result = parseFloat(x) - parseFloat(y);
            break;
        case 'multiply':
            result = parseFloat(x) * parseFloat(y);
            break;
        case 'divide':
            result = parseFloat(x) / parseFloat(y);
            break;
        default:
            return res.send('Invalid method provided');
    }

    res.send(`${x} ${method} ${y} = ${result}`);
}
app.get('/lab2', calculate);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
