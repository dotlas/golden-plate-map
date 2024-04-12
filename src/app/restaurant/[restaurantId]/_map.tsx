/**
 * This module defines a component for map showing a restaurant's location.
 *
 * @see RestaurantDetailMap
 * @see https://visgl.github.io/react-map-gl/
 */

"use client";

import { useMemo, useRef } from "react";
import Map, {
  GeolocateControl,
  Marker,
  NavigationControl,
  type MapRef,
} from "react-map-gl";

import GeocoderControl from "@/components/map/geocoder-control";

import "mapbox-gl/dist/mapbox-gl.css";

type RestaurantDetailMapProps = {
  latitude: number;
  longitude: number;
};

/**
 * A component for a map showing a restaurant's location.
 */
export function RestaurantDetailMap({
  latitude,
  longitude,
}: RestaurantDetailMapProps) {
  const markers = useMemo(() => {
    return [
      {
        latitude,
        longitude,
      },
    ];
  }, [latitude, longitude]);

  const mapRef = useRef<MapRef>(null);

  return (
    <Map
      ref={mapRef}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      reuseMaps
      style={{ width: "100%", height: 480 }}
      mapStyle="mapbox://styles/mapbox/standard"
      initialViewState={{
        zoom: 10,
        latitude,
        longitude,
      }}
    >
      {/* Map controls */}
      <GeocoderControl
        position="top-right"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!}
        placeholder="Navigate"
        marker={false}
        countries="ae"
      />
      <GeolocateControl position="bottom-right" />
      <NavigationControl position="bottom-right" visualizePitch />

      {/* Markers */}
      {markers.map((marker, index) => (
        <Marker
          key={index}
          latitude={marker.latitude}
          longitude={marker.longitude}
        />
      ))}
    </Map>
  );
}
