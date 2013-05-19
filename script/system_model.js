var StarSystem = {

    Station : function (tradeable, x, y) {
        this.trade = tradeable || false;
        this.coordinates = { "x" : x || 0, "y" : y || 0 };
        this.visit = function(ship) {
            if (ship) {
                ship.visit_station(this);
            }
        };
    },

    Planet : function (habitable, x, y) {
        this.habitable = habitable || false;
        this.coordinates = { "x" : x || 0, "y" : y || 0 };
        this.visit = function(ship) {
            if (ship) {
                ship.visit_planet(this);
            }
        };
    },

    Phenomenon : function (dangerous, x, y) {
        this.dangerous = dangerous || false;
        this.coordinates = { "x" : x || 0, "y" : y || 0 };
        // eventually this won't just call "visit" on the ship
        // but will have a random chance to throw some kind
        // of disaster at the ship's crew
        this.visit = function(ship) {
            if (ship) {
                ship.visit_phenomenon(this);
            }
        };
    },

    SystemModel : function (x, y) {
        this.entities = [];
        this.coordinates = { "x" : x || 0, "y" : y || 0 };
    }
};
