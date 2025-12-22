import { useEffect, useRef } from "react";
import { loadGoogleMaps } from "../loadGoogleMaps";

export default function MapSection() {
  const mapRef = useRef(null);
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_KEY; // moved outside useEffect

  useEffect(() => {
    loadGoogleMaps(apiKey).then(() => {
      const location = { lat: 9.012081, lng: 38.809824 };

      const map = new window.google.maps.Map(mapRef.current, {
        center: location,
        zoom: 16,
        styles: [
          {
            featureType: "all",
            elementType: "geometry",
            stylers: [{ color: "#FFF9F0" }] // very light cream background
          },
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ color: "#FFD775" }] // bright gold labels
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#FFF5E0" }] // light road color
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ color: "#FFF9F0" }] // points of interest
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#FFF7E5" }] // very light water
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#FFF9F0" }]
          }
        ],
        disableDefaultUI: false, // keeps zoom and map controls
      });

      // Add marker
      new window.google.maps.Marker({
        position: location,
        map: map,
        title: "Aberdeen Hotel Addis",
      });
    });
  }, [apiKey]);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "400px",
        borderRadius: "10px",
        backgroundColor: "#FFF9F0" // ensures bright cream behind map
      }}
    />
  );
}
