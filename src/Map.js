import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import './Map.css';

class MapComponent extends React.Component {
    state = {
        lat: 55.702868,
        lng: 37.530865,
        zoom: 10
    };

    render() {
        var center = [this.state.lat, this.state.lng];

        return (
            <MapContainer zoom={this.state.zoom} center={center} attributionControl={false}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    // url="https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer/tile/{z}/{y}/{x}.png"
                    url="https://basemap.nationalmap.gov/arcgis/rest/services/USGSShadedReliefOnly/MapServer/WMTS/tile/1.0.0/USGSShadedReliefOnly/default/default028mm/{z}/{y}/{x}.png"
                    // url="https://tile.opentopomap.org/{z}/{x}/{y}.png"
                    // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        );
    }
}

export default MapComponent;