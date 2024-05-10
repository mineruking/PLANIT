const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('PLANIT Official Site');
})

app.listen(PORT, ()=>{
    console.log('SERVER START : https://localhost:${PORT}/');
})