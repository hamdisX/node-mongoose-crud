const Event = require('../models/event');


/* module.exports = {
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
      **************crud mongoo************************* 
    //seed our database
    seedEvents:(req,res)=>{
        //create some events
        const events = [
            { name: 'Basketball', description: 'Throwing into a basket.' },
            { name: 'Swimming', description: 'Michael Phelps is the fast fish.' },
            { name: 'Weightlifting', description: 'Lifting heavy things up' },
            { name: 'Cycling', description: 'James is the best' }
      ];
      //use the event model to insert/save
      for (event of events){
          var newEvent = new Event(event);
          newEvent.save();
          //Event.remove({}) : remove all event {}
      }
      //seeded
      res.send('Database seeded !') ;
    }
};
 */


module.exports = {
    showEvents: showEvents,
    showSingle: showSingle,
    seedEvents: seedEvents,
    showCreate : showCreate,
    processCreate : processCreate,
    showEdit : showEdit,
    processEdit : processEdit,
}

/**
 * show all events
 */

function showEvents(req, res) {
    //get all events
    Event.find({}, (err, events) => {
        if (err) {
            res.status(404);
            res.send('Events not found!');
        }

        //return a view with data
        res.render('pages/events',  { events: events });
    })
}
/* 
* tester where in req
function a(req,res){
    Event.$where('slug' == 'cycling').exec((err,events) => {
        if (err) {
            res.status(404);
            res.send('Events not found!');
        }

        //return a view with data
        res.render('pages/events',  { events: events });
    })
}
 */
/**
 * show a single event
 */

/* function showSingle(req, res) {
    //get a single event
    const event = { name: 'Basketball', slug: 'basketball', description: 'Throwing into a basket.' };
    res.render('pages/single', { event: event });
}
 */


function showSingle(req, res) {
    // get a single event
    Event.findOne({ slug: req.params.slug }, (err, event) => {
      if (err) {
        res.status(404);
        res.send('Event not found!');
      }
  
      res.render('pages/single', { event: event });
    });
  }

/******************************************* */

function seedEvents(req, res) {
    // create some events
    const events = [
        { name: 'Basketball', description: 'Throwing into a basket.' },
        { name: 'Swimming', description: 'Michael Phelps is the fast fish.' },
        { name: 'Weightlifting', description: 'Lifting heavy things up' },
        { name: 'Ping Pong', description: 'Super fast paddles' }
    ];

    // use the Event model to insert/save
    Event.remove({}, () => {
        for (event of events) {
            var newEvent = new Event(event);
            newEvent.save();
        }
    });

    // seeded!
    res.send('Database seeded!');
}



/**
 * Show the create form
 */
function showCreate(req, res) {
    res.render('pages/create');
  }
  
  /**
   * Process the creation form
   */
  function processCreate(req, res) {
    // create a new event
    const event = new Event({
      name: req.body.name,
      description: req.body.description
    });
  
    // save event
    event.save((err) => {
      if (err)
        throw err;
  
      // redirect to the newly created event
      res.redirect(`/events/${event.slug}`);
    });
  }

  /**
 * Show the edit form
 */
function showEdit(req, res) {
    Event.findOne({ slug: req.params.slug }, (err, event) => {
      res.render('pages/edit', {
        event: event
      });
    });
  }

  function processEdit(req, res) {
    
  
    // finding a current event
    Event.findOne({ slug: req.params.slug }, (err, event) => {
      // updating that event
      event.name        = req.body.name;
      event.description = req.body.description;
  
      event.save((err) => {
        if (err)
          throw err;
      });
      // redirect to the newly created event
      res.redirect(`/events/${event.slug}`);
    });
  }