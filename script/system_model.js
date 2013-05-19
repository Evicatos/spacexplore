var StarSystem = {
    SystemEntity : function (entity, x, y) {
        this.entity = entity || {};
        this.coordinates = { "x" : x || 0, "y" : y || 0 };
    },

    Station : function (tradeable) {
        this.trade = tradeable || false;
        this.visit = function(ship) {
            if (ship) {
                ship.visit_station(this);
            }
        };
    },

    Planet : function (habitable) {
        this.habitable = habitable || false;
        this.visit = function(ship) {
            if (ship) {
                ship.visit_planet(this);
            }
        };
    },

    Phenomenon : function (dangerous) {
        this.dangerous = dangerous || false;
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
