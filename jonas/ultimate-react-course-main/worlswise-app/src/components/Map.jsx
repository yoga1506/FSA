import React, { useEffect, useState } from "react";
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useCities } from "../contexts/CitiesContext";

const Map = () => {
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const [searchParams] = useSearchParams();

  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");

  //  this effect is used to control the marker to stay in current place if we come back
  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        className={styles.map}
        center={mapPosition}
        zoom={7}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

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
      <ChangePosition position={mapPosition} />
    </div>
  );
};

// useMap and setView comes from leaf-let libraray and follow the documentation of leaflet Libraray

function ChangePosition({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

// useMapEvent comes from leaf-let libraray and follow the documentation of leaflet Libraray
function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}

export default Map;
