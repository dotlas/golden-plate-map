import bbox from "@turf/bbox";
import { points } from "@turf/helpers";
import { useCallback, useMemo, type RefObject } from "react";
import { useMap, type MapRef } from "react-map-gl";

type ZoomToMarkersProps = {
  markers: { latitude: number; longitude: number }[];
  mapRef?: RefObject<MapRef>;
  options?: mapboxgl.FitBoundsOptions;
  eventData?: mapboxgl.EventData;
};

export function useZoomToMarkers({
  markers,
  mapRef,
  options,
  eventData,
}: ZoomToMarkersProps) {
  const { current: map } = useMap();

  const mapToUse = useMemo(() => {
    return mapRef?.current ?? map ?? null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, mapRef?.current]);

  return useCallback(() => {
    if (!mapToUse || markers.length === 0) return;

    const features = points(
      markers.map(({ latitude, longitude }) => [longitude, latitude]),
    );

    const bounds = bbox(features) as [number, number, number, number];

    mapToUse.fitBounds(bounds, options, eventData);
  }, [mapToUse, markers, options, eventData]);
}
