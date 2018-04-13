
//grab our dependencies 

const express = require('express')
app = express(); //new instance of express
mongoose = require('mongoose')
expressLayouts = require('express-ejs-layouts')
port = process.env.PORT || 8888 ;


/* on appel methode app.use() to use middlware*/

//configure our application ==========================================
//tel express where to look for static assets
app.use(express.static(__dirname + '/public')) ;

//set ejs as our templating engine 
app.set('view engine','ejs') ;
app.use(expressLayouts);

//connect to our database 
mongoose.connect('mongodb://root:root@ds133856.mlab.com:33856/olympic-event')

//set the route =======================================================
app.use(require('./app/routes'));
/* 
 app.get('/',(req,res)=>{
    res.send('hello , I am the app! ') ;
}) ;   */




//start our server ======================================================
 app.listen(port, () =>{
    console.log(`App listening on http://localhost:${port}`);
}) ; 
