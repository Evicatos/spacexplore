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

test( "SystemEntity", function() {
    var entity = new SystemEntity();
    strictEqual(entity.coordinates.x, 0, "default x match");
    strictEqual(entity.coordinates.y, 0, "default y match");

    var stat_entity = new SystemEntity(new Station());
    strictEqual(stat_entity.coordinates.x, 0, "stat x match");
    strictEqual(stat_entity.coordinates.y, 0, "stat y match");
    strictEqual(stat_entity.entity.trade, false, "trade match");

    var plan_entity = new SystemEntity(new Planet(), 1, 2);
    strictEqual(plan_entity.coordinates.x, 1, "plan x match");
    strictEqual(plan_entity.coordinates.y, 2, "plan y match");
    strictEqual(plan_entity.entity.habitable, false, "habit match");
});

test( "Station", function() {
    var station = new Station();
    strictEqual(station.trade, false, "default trade");
    station.visit();

    var tradeable = new Station(true);
    strictEqual(tradeable.trade, true, "true trade");

    var mock_ship = new MockShip(true);
    tradeable.visit(mock_ship);
});

test( "Planet", function() {
    var planet = new Planet();
    strictEqual(planet.habitable, false, "default habitable");
    var habitable = new Planet(true);
    strictEqual(habitable.habitable, true, "true habitable");
    var mock_ship = new MockShip(true);
    habitable.visit(mock_ship);
});

test( "Phenomenon", function() {
    var phen = new Phenomenon();
    strictEqual(phen.dangerous, false, "default danger");
    var dangerous = new Phenomenon(true);
    strictEqual(dangerous.dangerous, true, "false danger");
    var mock_ship = new MockShip(true);
    dangerous.visit(mock_ship);
});

test( "SystemModel", function() {
    var sys = new SystemModel(1, 2);
    strictEqual(sys.coordinates.x, 1, "system x matches");
    strictEqual(sys.coordinates.y, 2, "system y matches");

    var mock_ship = new MockShip(false);

    sys.entities.push(new Station());
    sys.entities.push(new Planet());
    sys.entities.push(new Phenomenon());

    for (var i = 0; i < sys.entities.length; i++) {
        sys.entities[i].visit(mock_ship);
    }
});
