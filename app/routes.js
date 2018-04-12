
//create a new express router
const express = require('express') ,
router = express.Router();


//export router
module.exports = router ;

//define routes
router.get('/',(req,res)=>{
    res.send('hello , I am the app! ') ;
});
