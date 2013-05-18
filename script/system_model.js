function Station(tradeable, x, y) {
    this.trade = tradeable || false;
    this.coordinates = { "x" : x || 0, "y" : y || 0 };
}

function Planet(habitable, x, y) {
    this.habitable = habitable || false;
    this.coordinates = { "x" : x || 0, "y" : y || 0 };
}

function Phenomenon(dangerous, x, y) {
    this.dangerous = dangerous || true;
    this.coordinates = { "x" : x || 0, "y" : y || 0 };
}

function SystemModel() {
    this.coordinates = [0, 0];
    this.planets = [];
    this.space_stations = [];
    this.phenomena = [];
}
