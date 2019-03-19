const express = require('express');
const app = express();

app.use(express.static('public'));
//get for app.js
app.get('/', (req, res) => {
    res.send('Joshua created a server here!');
});
//post for app.js
app.post('/', (req, res) => {
    res.send('Joshua got a POST request!!!');
});
//useless apparently
// app.get('/thebiz', (req, res) => {
//     req('exercise4.html')
// });



app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});