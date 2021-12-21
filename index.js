const express = require('express');
const cors = require('cors');
const bodyPerser = require('body-parser');
const mongoose = require('mongoose');


const app = express()

app.use(cors())

app.use(express.static('public'))
// app.get('/', (req, res) => {
//     res.send('<h2>Hello I am node server runing on port 4444')
// })

const PORT = process.env.PORT || 4444

app.listen(PORT, () =>{
    console.log('App Is runing on PORT' + PORT);
})