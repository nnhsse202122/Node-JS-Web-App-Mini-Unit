const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');

const app = express();

dotenv.config({path:'config.env'});
const PORT = process.env.PORT || 8080;

// log requests
app.use(morgan('tiny'));

// parse request to body-parser
app.unsubscribe(bodyparser.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.send("Crud Application");
});

app.listen(PORT, ()=>{ console.log(`Server is running on http://localhost:${PORT}`)});