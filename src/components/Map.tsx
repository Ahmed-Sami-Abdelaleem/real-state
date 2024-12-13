"use client";

import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useRef } from "react";

const MapLibreMap = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://demotiles.maplibre.org/style.json", // Free style from MapLibre
      center: [0, 0],
      zoom: 2,
    });

    return () => map.remove();
  }, []);

  return <div ref={mapContainer} style={{ height: "800px", width: "100%" }} />;
};

export default MapLibreMap;
