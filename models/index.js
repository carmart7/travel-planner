// import models
const Location = require('./Location');
const Traveller = require('./Traveller');
const Trips = require('./Trips');

Location.belongsToMany(Traveller, {
    through: Trips,
    foreign: 'location_id',
    otherKey: 'traveller_id'
});

Traveller.belongsToMany(Location, {
    through: Trips,
    foreign: 'traveller_id',
    otherKey: 'location_id'
});

module.exports = {
    Location,
    Traveller,
    Trips
};