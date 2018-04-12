
module.exports={

    //show all events 
    showEvents:(req,res)=>{
        //create dummy events
        const events= [
            { name: 'Basketball', description: 'Throwing into a basket.' },
    { name: 'Swimming', description: 'Michael Phelps is the fast fish.' },
    { name: 'Weightlifting', description: 'Lifting heavy things up' },
    { name: 'Ping Pong', description: 'Super fast paddles' }
        ];
        
        //return a view with data 
        res.render('pages/events',{events : events}) ;
    }
};