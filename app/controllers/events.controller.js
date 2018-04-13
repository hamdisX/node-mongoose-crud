
module.exports = {

    //show all events 
    showEvents: (req, res) => {
        //create dummy events
        const events = [
            { name: 'Basketball', slug: 'basketball', description: 'Throwing into a basket.' },
            { name: 'Swimming', slug: 'swimming', description: 'Michael Phelps is the fast fish.' },
            { name: 'Weightlifting', slug: 'weightlifting', description: 'Lifting heavy things up' }
        ];

        //return a view with data 
        res.render('pages/events', { events: events });
    },


    //show a single event
    showSingle: (req, res) => {
        //get a single event
        const event = { name: 'Basketball', slug: 'basketball', description: 'Throwing into a basket.' };
        res.render('pages/single', { event: event })

    },


    // ***************crud mongoo*************************//

    //seed our database
    sedEvents:(req,res)=>{
        //create some events
        const events = [
            { name: 'Basketball', description: 'Throwing into a basket.' },
            { name: 'Swimming', description: 'Michael Phelps is the fast fish.' },
            { name: 'Weightlifting', description: 'Lifting heavy things up' }
      ];
      //use the event model to insert/save
      for (event of events){
          var newEvent = new Event(event);
          newEvent.save();
      }

      //seeded
      res.send('Database seeded !') ;
    }


};

