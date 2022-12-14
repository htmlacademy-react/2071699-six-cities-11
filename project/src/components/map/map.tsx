import {useRef, useEffect} from 'react';
import {isEqual} from 'lodash';
import {Icon, Marker, LayerGroup, TileLayer} from 'leaflet';
import useMap from '../../hooks/use-map/use-map';
import {OfferType, LocationType, CityType} from '../../types/offers';
import {ImgMarker} from '../../constants';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: CityType;
  offers: OfferType[];
  selectedPoint?: LocationType | null;
  classNameMap: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: ImgMarker.MarkerDefault,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: ImgMarker.MarkerCurrent,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({city, offers, selectedPoint, classNameMap}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const points: LocationType[] = offers.map((el)=> el.location);

  useEffect(() => {
    if (map) {
      map.eachLayer((layer) => layer.remove());
      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      map.addLayer(layer);

      const markerGroup = new LayerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude
        });
        marker.addTo(markerGroup);
        marker
          .setIcon(
            selectedPoint !== undefined && isEqual(point, selectedPoint)
              ? currentCustomIcon
              : defaultCustomIcon
          );
      });

    }
  }, [map, points, selectedPoint]);

  useEffect(() => {
    if (map) {
      map.setView({
        lat: city.location.latitude,
        lng: city.location.longitude
      },
      city.location.zoom);}}, [map, city]);

  return <section className={`${classNameMap}__map`} ref={mapRef} data-testid="map"></section>;
}

export default Map;
