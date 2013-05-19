// just tossing this here for now, should be in
// some kind of root namespace eventually though
var Coordinates = function(x, y) {
    this.x = x || 0;
    this.y = y || 0;
};

var StarSystem = {

    Station : function (tradeable, x, y) {
        this.trade = tradeable || false;
        this.coordinates = new Coordinates(x, y);
        this.visit = function(ship) {
            if (ship) {
                ship.visit_station(this);
            }
        };
    },

    Planet : function (habitable, x, y) {
        this.habitable = habitable || false;
        this.coordinates = new Coordinates(x, y);
        this.visit = function(ship) {
            if (ship) {
                ship.visit_planet(this);
            }
        };
    },

    Phenomenon : function (dangerous, x, y) {
        this.dangerous = dangerous || false;
        this.coordinates = new Coordinates(x, y);
        // eventually this won't just call "visit" on the ship
        // but will have a random chance to throw some kind
        // of disaster at the ship's crew
        this.visit = function(ship) {
            if (ship) {
                ship.visit_phenomenon(this);
            }
        };
    },

    SystemModel : function (x, y, entity_generator) {
        this.interstellar_coordinates = new Coordinates(x, y);
        if (entity_generator) {
            this.entities = entity_generator.generate();
        } else {
            this.entities = [];
        }
    }
};
