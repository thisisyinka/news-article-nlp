const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded());

const cors = require('cors');
const axios = require('axios').default;
app.use(cors());

app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
})

const port = 8001;
const server = app.listen(port, () => console.log(`Server successfully running on localhost:${port}`));


app.post('/entry', (req, res) => {
    const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?';
    const apiKey = process.env.API_KEY;
    const theURL = req.body.url;

    axios.post(`${baseURL}key=${apiKey}&url=${theURL}&lang=en`)
        .then(function (response) { console.log(response.data) })
        .catch(function (error) {
            console.log('Nothing happened', error);
        })
})