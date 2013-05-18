test( "Station", function() {
    var station = new Station();
    strictEqual(station.trade, false);
    strictEqual(station.coordinates.x, 0);
    strictEqual(station.coordinates.y, 0);
    var tradeable = new Station(true, 1, 2);
    strictEqual(tradeable.trade, true);
    strictEqual(tradeable.coordinates.x, 1);
    strictEqual(tradeable.coordinates.y, 2);
    var no_coords = new Station(true);
    strictEqual(no_coords.trade, true);
    strictEqual(no_coords.coordinates.x, 0);
    strictEqual(no_coords.coordinates.y, 0);
});

test( "Station", function() {
    var station = new Station();
    strictEqual(station.trade, false);
    strictEqual(station.coordinates.x, 0);
    strictEqual(station.coordinates.y, 0);
    var tradeable = new Station(true, 1, 2);
    strictEqual(tradeable.trade, true);
    strictEqual(tradeable.coordinates.x, 1);
    strictEqual(tradeable.coordinates.y, 2);
    var no_coords = new Station(true);
    strictEqual(no_coords.trade, true);
    strictEqual(no_coords.coordinates.x, 0);
    strictEqual(no_coords.coordinates.y, 0);
});

test( "Station", function() {
    var station = new Station();
    strictEqual(station.trade, false);
    strictEqual(station.coordinates.x, 0);
    strictEqual(station.coordinates.y, 0);
    var tradeable = new Station(true, 1, 2);
    strictEqual(tradeable.trade, true);
    strictEqual(tradeable.coordinates.x, 1);
    strictEqual(tradeable.coordinates.y, 2);
    var no_coords = new Station(true);
    strictEqual(no_coords.trade, true);
    strictEqual(no_coords.coordinates.x, 0);
    strictEqual(no_coords.coordinates.y, 0);
});

test( "Station", function() {
    var station = new Station();
    strictEqual(station.trade, false);
    strictEqual(station.coordinates.x, 0);
    strictEqual(station.coordinates.y, 0);
    var tradeable = new Station(true, 1, 2);
    strictEqual(tradeable.trade, true);
    strictEqual(tradeable.coordinates.x, 1);
    strictEqual(tradeable.coordinates.y, 2);
    var no_coords = new Station(true);
    strictEqual(no_coords.trade, true);
    strictEqual(no_coords.coordinates.x, 0);
    strictEqual(no_coords.coordinates.y, 0);
});
