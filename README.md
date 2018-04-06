# node-streetview

Super simple wrapper for the Google Maps Steetview API. No fancy stuff. Just plug in your location, size and API key and get an image back. 
There are two functions provided and they are just simple wrappers around the HTTP API. They accept the same parameters as are defined in the Google Maps Streetview Documentation:https://developers.google.com/maps/documentation/streetview/intro

```
sv.image({
    size: [600, 600],
    lat: point.lat,
    lng: point.lon,
    heading: point.bearing
}).then((image) => {
   
});


sv.metadata({
    size: [600, 600],
    lat: point.lat,
    lng: point.lon,
    heading: point.bearing
}).then((metadata) => {
   
});
```
