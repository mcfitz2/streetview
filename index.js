var request = require("request-promise-native");

function streetview(opts) {
    this.key = opts.api_key;
}
streetview.prototype.get = function(opts) {
	if (!opts.location && !opts.pano && !opts.lat && !opts.lng) {
		return Promse.reject("You must supply a location, lat/lng, or panorama ID");
	}
	if ((opts.lat && !opts.lng) || (opts.lng && !opts.lat)) {
		return Promise.reject("You must supply both lat and lng");
	}
	if (!opts.size || opts.size.length != 2) {
		return Promise.reject("Missing or invalid size parameter");
	}
	var BASE = "https://maps.googleapis.com/maps/api/streetview"
    opts.key = this.key;
    if (opts.location === null) {
        opts.location = opts.lat + "," + opts.lng;
    }
    delete opts.lat;
    delete opts.lng;
    opts.size = opts.size[0] + "x" + opts.size[1];
    console.log(opts);
    return request({
        url: BASE,
        qs: opts,
        method: "GET",
        encoding: null
    }).then((body) => {
        return Promise.resolve(body);
    }).catch((err) => {
        return Promise.reject(err);
    });
}