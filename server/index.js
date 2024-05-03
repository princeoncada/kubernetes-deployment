// Express App Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/data', async (req, res) => {
    try {
        const rows = [
            { id: 1, data: 'Alice' },
            { id: 2, data: 'Bob' },
            { id: 3, data: 'Charlie' },
        ];  
        res.json(rows);
    } catch (err) {
        console.log('Error querying data: ', err);
    }
});

// 5000 is default, you may change as needed
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});