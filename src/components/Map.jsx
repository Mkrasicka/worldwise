import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

function Map() {
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();
  // pragmatic navigation
  // eslint-disable-next-line
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [mapPosition, setMapPosition] = useState([40, 0]);
  // eslint-disable-next-line
  const lat = searchParams.get("lat");
  // eslint-disable-next-line
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={false}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
