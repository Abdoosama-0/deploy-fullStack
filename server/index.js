require('dotenv').config()
const express = require('express');
const cors=require('cors')

const app = express();
app.use(cors())
const port = process.env.port||5000;

app.get('/', (req, res) => {
    res.status(200).json({msg:'Hello World!'});
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});