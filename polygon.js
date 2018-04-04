var map_center_default = {lat: 35.5944255, lng: -82.5554687}

var map = new google.maps.Map(document.getElementById('map'), {
    center: map_center_default,
    zoom: 17/*,
    styles: map_style*/
});

var overlay_coords = [];
var overlay = null;
function mapClick(e) {
    var latLng = e.latLng,
    lat = latLng.lat(),
    lng = latLng.lng();
    overlay_coords.push({lat: lat, lng: lng})
    console.log(JSON.stringify(overlay_coords));
    if(overlay != null) {
        overlay.setMap(null);
    }
    overlay = new google.maps.Polygon({
        paths: overlay_coords,
        strokeColor: '#ef4b46',
        strokeOpacity: 1,
        strokeWeight: 1,
        fillColor: '#ef4b46',
        fillOpacity: .1
    });
    overlay.addListener('click', mapClick);
    console.log(overlay);
    overlay.setMap(map);
}

google.maps.event.addListener(map, 'click', mapClick);