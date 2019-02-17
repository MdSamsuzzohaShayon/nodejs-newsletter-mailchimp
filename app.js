const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

//static folder
app.use(express.static(path.join(__dirname, 'public')));

//signup route
app.post('/signup', (req, res)=>{
    const {firstName, lastName, email} = req.body;

    // validation for form != null
    if(!firstName || !lastName || !email){
        res.redirect('/failed.html');
        return;
    }


});


const port = process.env.PORT || 5000;

app.listen(port, console.log('Server started on http://localhost:5000'));