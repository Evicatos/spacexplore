function MockShip(state) {
    this.visit_station = function(stat) {
        strictEqual(stat.trade, state, "mock ship visiting station");
    };
    this.visit_planet = function(plan) {
        strictEqual(plan.habitable, state, "mock ship visiting planet");
    };
    this.visit_phenomenon = function(phenom) {
        strictEqual(phenom.dangerous, state, "mock ship visiting phenomenon");
    };
}

function MockEntityGenerator() {
    this.generate = function() {
        var return_array = [];
        return_array.push(new StarSystem.Station());
        return_array.push(new StarSystem.Planet(false, 1, 1));
        return_array.push(new StarSystem.Phenomenon(false, 2, 2));
        return return_array;
    };
}

test( "StarSystem::Station", function() {
    var station = new StarSystem.Station();
    strictEqual(station.trade, false, "default trade");
    station.visit();

    var tradeable = new StarSystem.Station(true);
    strictEqual(tradeable.trade, true, "true trade");

    var mock_ship = new MockShip(true);
    tradeable.visit(mock_ship);
});

test( "StarSystem::Planet", function() {
    var planet = new StarSystem.Planet();
    strictEqual(planet.habitable, false, "default habitable");
    var habitable = new StarSystem.Planet(true);
    strictEqual(habitable.habitable, true, "true habitable");
    var mock_ship = new MockShip(true);
    habitable.visit(mock_ship);
});

test( "StarSystem::Phenomenon", function() {
    var phen = new StarSystem.Phenomenon();
    strictEqual(phen.dangerous, false, "default danger");
    var dangerous = new StarSystem.Phenomenon(true);
    strictEqual(dangerous.dangerous, true, "false danger");
    var mock_ship = new MockShip(true);
    dangerous.visit(mock_ship);
});

test( "StarSystem::SystemModel", function() {
    var mock_generator = new MockEntityGenerator();

    var sys = new StarSystem.SystemModel(1, 2, mock_generator);
    strictEqual(sys.interstellar_coordinates.x, 1, "system x matches");
    strictEqual(sys.interstellar_coordinates.y, 2, "system y matches");

    var mock_ship = new MockShip(false);


    for (var i = 0; i < sys.entities.length; i++) {
        sys.entities[i].visit(mock_ship);
        strictEqual(sys.entities[i].coordinates.x, i, 
            "system coordinates " + i + " x matches");
        strictEqual(sys.entities[i].coordinates.y, i, 
            "system coordinates " + i + " y matches");
    }
});
