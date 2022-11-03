const router = require('express').Router();
// require models 

router.get('/', (req, res) => {
    // sequalize stuff
    // returns all location data
});

router.post('/', (req, res) => {
    // sequalize stuff
    //creates location data and returns a successful response
});

router.get('/:id', (req, res) => {
    // sequalize stuff
    //  returns a single location's data, with its associated trips
});

router.delete('/:id', (req, res) => {
    // sequalize stuff
    // emoves a location and any trips associated with it and returns a successful response
});

module.exports = router;