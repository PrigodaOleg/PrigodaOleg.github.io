import React from "react";
import './Map.css';

import Map from 'ol/Map.js';
// import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import {XYZ} from "ol/source";
import {Point} from "ol/geom.js"
import {fromLonLat} from 'ol/proj.js';

class MapComponent extends React.Component {
    state = {
        lat: 55.702868,
        lng: 37.530865,
        zoom: 5
    };

    componentDidMount() {

        let place = new fromLonLat([this.state.lat, this.state.lng])
        let map = new Map({
            target: "map",
            layers: [
                new TileLayer({
                    source: new XYZ({
                        url: "https://stamen-tiles-c.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.png"
                    })
                })
            ],
            view: new View({
                center: place,
                zoom: this.state.zoom
            })
        })
    }

    render() {

        return (
            <div id="map"></div>
        );
    }
}

export default MapComponent;