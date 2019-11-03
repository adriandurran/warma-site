import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import styles from '../../css/trails.module.css';

const TrailMap = ({ coords, name }) => {
  return (
    <Map center={coords} zoom={13} className={styles.map}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={coords}>
        <Popup>{name}</Popup>
      </Marker>
    </Map>
  );
};

export default TrailMap;
