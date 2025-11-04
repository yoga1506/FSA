import React, { useState } from "react";
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useCities } from "../contexts/CitiesContext";
import { use } from "react";

const Map = () => {
  const navigate = useNavigate();

  const { cities } = useCities();

  const [searchParams, setSearchParams] = useSearchParams();

  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");

  const [mapPosition, setMapPosition] = useState([40, 0]);

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>hello</h1>
      <MapContainer
        className={styles.map}
        center={mapPosition}
        zoom={10}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <ChangePosition position={[mapLat || 40, mapLng || 0]} />

        {cities.map((city) => {
          return (
            <Marker
              key={city.id}
              position={[city.position.lat, city.position.lng]}
            >
              <Popup>
                <span>{city.cityName}</span>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

function ChangePosition({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}
export default Map;
