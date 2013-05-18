function SystemEntity(entity, x, y) {
    this.entity = entity || {};
    this.coordinates = { "x" : x || 0, "y" : y || 0 };
}

function Station(tradeable) {
    this.trade = tradeable || false;
}

Station.prototype.visit = function(ship) {
    if (ship) {
        ship.visit_station(this);
    }
};

function Planet(habitable) {
    this.habitable = habitable || false;
}

Planet.prototype.visit = function(ship) {
    if (ship) {
        ship.visit_planet(this);
    }
};

function Phenomenon(dangerous) {
    this.dangerous = dangerous || false;
}

Phenomenon.prototype.visit = function(ship) {
    if (ship) {
        ship.visit_phenomenon(this);
    }
};

function SystemModel(x, y) {
    this.entities = [];
    this.coordinates = { "x" : x || 0, "y" : y || 0 };
}
