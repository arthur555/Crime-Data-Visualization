import React, { Component } from 'react'
const center = [51.505, -0.09]

/*
      <Map center={center} zoom={13} style ={{ flex:1, height:800}}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
*/

/*

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v8',
    center: [-78.89, 35.99],
    zoom: 12,
})
map.fitBounds([[
    -78.89,
    -35.99
]]);

*/



export default class MapArea extends React.Component {
  render() {
    var map = L.map('mapid').setView([center]);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1Ijoic2hpbWl6dSIsImEiOiI0cl85c2pNIn0.RefZMaOzNn-IistVe-Zcnw'
    }).addTo(map);

    return (
        <div id="mapid"></div>
    );
  }
}
export { MapArea };

