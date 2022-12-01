const createChart = require('./modules/createChart');
const express = require('express');
const app = express();
const port = 3000;

const serverURI = 'http://localhost:'+port;

//const cors=require('cors')
// app.use(cors())
// app.use((req, res, next) => {
//      res.header("Access-Control-Allow-Origin", "*")
//      res.header("Access-Control-Allow-Headers", "Content-Type, Accept, Authorization, Origin, X-Requested-With")
//      if(req.method === "OPTIONS") {
//       res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE")
//     }
//     next()
//  })
// app.use(express.urlencoded({extended:false}))
// app.use(express.json())

app.use(express.json());
app.listen(port,()=>console.log('Webseerver'+serverURI));

app.post('/createImage',(req, res) => {
    console.log(req.body)
    createChart.createImage(req.body);
    res.status(200).json({
        statusCode: 200,
        status: true,
        message: "The image created successfully"
    })  
});

module.exports = app;
