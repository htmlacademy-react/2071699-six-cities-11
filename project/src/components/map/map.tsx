import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/use-map/use-map';
import {LocationType, CityType} from '../../types/offers';
import {IMG_MARKER_DEFAULT, IMG_MARKER_CURRENT} from '../../constants';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: CityType;
  points: LocationType[];
  selectedPoint: LocationType | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: IMG_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: IMG_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({city, points, selectedPoint}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.latitude === selectedPoint.latitude && point.longitude === selectedPoint.longitude
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return <section className="cities__map" ref={mapRef}></section>;
}

export default Map;

