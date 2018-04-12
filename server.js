
//grab our dependencies 

const express = require('express')
app = express(); //new instance of express
port = process.env.PORT || 8888 ;

//configure our application 



//set the route 
app.get('/',(req,res)=>{

    res.send('hello , I am the app! ') ;
}) ;


//start our server
app.listen(port, () =>{
    console.log(`App listening on http://localhost:${port}`);
}) ;
