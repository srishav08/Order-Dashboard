const express = require('express');
const app = express();
const csv = require("csvtojson");

// Convert a csv file with csvtojson
app.get('/api/orders', (req, res) => {
  csv()
    .fromFile('./orders.csv')
    .then(function (jsonArrayObj) { //when parse finished, result will be emitted here.
      res.json(jsonArrayObj);
    })


});


const port = 5000;
app.listen(port, () => console.log(`server started at port: ${port}`));