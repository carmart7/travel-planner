const router = require('express').Router();
// require models 

router.get('/', (req, res) => {
    // sequalize stuff
    // returns all traveller data without associated trips
});

router.post('/', (req, res) => {
    // sequalize stuff
    // creates traveller data and returns a successful response
});

router.get('/:id', (req, res) => {
    // sequalize stuff
    // returns a single traveller's data with their associated trips and a list of locations
});

router.delete('/:id', (req, res) => {
    // sequalize stuff
    //emoves a traveller and any trips associated with them and returns a successful response
});

module.exports = router;