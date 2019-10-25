
const express = require('express');
const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator');

const app = express();

app.use( bodyParser.json() );       

app.use(bodyParser.urlencoded({     
  extended: true
}));


app.post('/address'[
    // username must be an email
    check('street').exists(),
    check('streetNumber').exists(),
    check('town').exists(),
    check('postalCode').exists(),
    check('country').exists()
  ], function (req, res) {
    
    console.log('req.body', req.body)
    const { street, streetNumber, town, postalCode, country}  = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({
            valid: false
        })
    } 

    res.json({
        valid: true
    })
    
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY

