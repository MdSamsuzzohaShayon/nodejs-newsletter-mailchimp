const express = require('express');
const request = require('request');
const path = require('path');
const keys = require('./config/keys');

const app = express();


app.set("view engine", "ejs");
// app.use((req, res, next) => {
//     res.header({"Access-Control-Allow-Origin": "*"})});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));




/*
// FOR NOW LETS USE HTML STATIC SITE FOR SENDING REQUEST TO BACKEND 
// WILL USE GET REQUEST WHEN WILL SEND REQUEST FROM BACKEND TO BACKEND 
app.get('/', (req, res, next) => {
    const email = req.body.email;
    console.log(email);
    res.render("index");
});
*/


app.post('/subscribe', (req, res, next) => {
    console.log("Post method: ", req.body);
    const { email, js } = req.body;

    const mcData = {
        members: [
            {
                email_address: email,
                // status: 'subscribed', 
                status: 'pending'  // PENDING FOR VERIFY EMAIL TO ADD IN OUR LIST

            }
        ]
    };

    const mcDataPost = JSON.stringify(mcData);

    const options = {
        url: keys.LIST_AUDIANCE_API + keys.AUDIANCE_ID,
        method: "POST",
        headers: {
            Authorization: "auth "+keys.API_KEY
        },
        body: mcDataPost
    }



    if(email){
        request(options, (err, response, body)=>{
            if(err){
                return res.json({error: err});
            }else{
                if(js){
                    console.log("JavaScript is enable");
                    return res.status(200).json({ msg: "sent" });
                    next();
                }else{
                    console.log("JavaScript is disable");
                    return res.redirect('/success.html');
                    next();
                }
            }
        });
    }else{
        res.status(404).send({message: "Failed"});
    }





    // res.redirect('/');
});



const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server is running on : ' + port));