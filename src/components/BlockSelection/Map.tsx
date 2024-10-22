import React from 'react';
import MapGL, { Source, Layer } from 'react-map-gl';
import { LayerProps } from 'react-map-gl';
import type { FeatureCollection } from 'geojson';
const MAPBOX_TOKEN1 = 'pk.eyJ1IjoicGFjZTMwNjgiLCJhIjoiY20yY2U2Y3l4MHpndTJqb241NXNkbDUxZyJ9._x38TqLuw3fR-WBwyQzJow'; // Replace with your Mapbox token
const MAPBOX_TOKEN = 'sk.eyJ1IjoicGFjZTMwNjgiLCJhIjoiY20yaWI0YnJtMGtzMTJrcTI2NXNyenkyaSJ9.2RBJ6_7iYv5jpbG0nlBzlw'; // Replace with your Mapbox token

const Map: React.FC = () => {
 
  // Your GeoJSON feature collection
  const geojson: FeatureCollection =  {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [176.055417, -37.675074],
              [176.055616, -37.675448],
              [176.056198, -37.675749],
              [176.05649, -37.675673],
              [176.056158, -37.674866],
              [176.055417, -37.675074],
            ],
            [
              [180, -80],
              [180, 80],
              [-180, 80],
              [-180, -80],
              [180, -80],
            ],
          ],
        },
        properties: {
          id: '4673a72f-4419-4c3e-86cf-d3aef2cbbf20',
          type: 'OperationalArea',
          fill: '#29ff00',
          'fill-opacity': 0,
          'stroke-width': 0,
          name: 'Operational Area',
          category: 'default',
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [176.05560261951703, -37.67520530041891],
              [176.05595359702372, -37.67512183012362],
              [176.0561454020093, -37.6755837688323],
              [176.05605268446143, -37.67560007081873],
              [176.05595735358574, -37.67551176432334],
              [176.05587444567783, -37.67544783533412],
              [176.05579853110456, -37.67540488366765],
              [176.0556572228991, -37.67533473065786],
              [176.05560261951703, -37.67520530041891],
            ],
          ],
        },
        properties: {
          id: 'e5fdaa4d-92c6-429c-a173-f15f4052471f',
          type: 'Block',
          fill: '#002DFF',
          'fill-opacity': 0,
          'stroke-width': 0,
          name: 'Block 1',
          category: 'default',
          selection: {
            checked: false,
            rows_targeted: '',
            strategy: 'Normal',
          },
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [176.055604, -37.675206],
              [176.055953, -37.675123],
              [176.056144, -37.675583],
              [176.056053, -37.675599],
              [176.055958, -37.675511],
              [176.055875, -37.675447],
              [176.055799, -37.675404],
              [176.055658, -37.675334],
              [176.055604, -37.675206],
            ],
          ],
        },
        properties: {
          id: '7b2a523f-0a5b-4f2c-bd68-bc62b3309d37',
          type: 'PlantedArea',
          fill: '#00FFF6',
          'fill-opacity': 0.2,
          'stroke-width': 0,
          name: 'Planted Area 1',
          block_id: 'e5fdaa4d-92c6-429c-a173-f15f4052471f',
          category: 'default',
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [176.055459, -37.675197],
              [176.055482, -37.675189],
              [176.055495, -37.67521],
              [176.055468, -37.675218],
              [176.055459, -37.675197],
            ],
          ],
        },
        properties: {
          id: '726c6ac8-3878-45be-a181-716f8fda2b60',
          type: 'Obstacle',
          fill: '#002DFF',
          'fill-opacity': 0,
          'stroke-width': 0,
          name: 'Water Tank',
          category: 'default',
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [176.055715, -37.674999],
              [176.055735, -37.675037],
              [176.055898, -37.674998],
              [176.055876, -37.674956],
              [176.055715, -37.674999],
            ],
          ],
        },
        properties: {
          id: '39a08308-40e9-4fa4-999e-df2f2ef730d1',
          type: 'Obstacle',
          fill: '#002DFF',
          'fill-opacity': 0,
          'stroke-width': 0,
          name: 'Trailer',
          category: 'default',
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [176.055605, -37.675204],
            [176.055661, -37.675336],
          ],
        },
        properties: {
          id: 'be75b798-5915-48bc-869d-4f67d6925055',
          type: 'Row',
          fill: '#002DFF',
          'fill-opacity': 0.2,
          'stroke-width': 0,
          name: 'Row 1',
          category: 'default',
          block_id: 'e5fdaa4d-92c6-429c-a173-f15f4052471f',
          row_number: 1,
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [176.055636, -37.675197],
            [176.055698, -37.675355],
          ],
        },
        properties: {
          id: 'a6bda429-08cc-4e6c-bbee-3c66234f1bcd',
          type: 'Row',
          fill: '#002DFF',
          'fill-opacity': 0.2,
          'stroke-width': 0,
          name: 'Row 2',
          category: 'default',
          block_id: 'e5fdaa4d-92c6-429c-a173-f15f4052471f',
          row_number: 2,
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [176.055661, -37.675191],
            [176.055734, -37.675375],
          ],
        },
        properties: {
          id: '9ebd7d91-e8aa-4525-a986-720ab1cf1a85',
          type: 'Row',
          fill: '#002DFF',
          'fill-opacity': 0.2,
          'stroke-width': 0,
          name: 'Row 3',
          category: 'default',
          block_id: 'e5fdaa4d-92c6-429c-a173-f15f4052471f',
          row_number: 3,
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [176.055687, -37.675185],
            [176.055771, -37.675393],
          ],
        },
        properties: {
          id: 'e3849850-4e72-4fcf-9e94-02cf141882b9',
          type: 'Row',
          fill: '#002DFF',
          'fill-opacity': 0.2,
          'stroke-width': 0,
          name: 'Row 4',
          category: 'default',
          block_id: 'e5fdaa4d-92c6-429c-a173-f15f4052471f',
          row_number: 4,
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [176.055715, -37.675179],
            [176.055804, -37.675409],
          ],
        },
        properties: {
          id: 'd82bb581-544a-49da-825f-b039c9fb2a2e',
          type: 'Row',
          fill: '#002DFF',
          'fill-opacity': 0.2,
          'stroke-width': 0,
          name: 'Row 5',
          category: 'default',
          block_id: 'e5fdaa4d-92c6-429c-a173-f15f4052471f',
          row_number: 5,
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [176.055739, -37.675173],
            [176.055842, -37.675428],
          ],
        },
        properties: {
          id: '76b63254-14c9-49ef-96bc-d985ee237bec',
          type: 'Row',
          fill: '#002DFF',
          'fill-opacity': 0.2,
          'stroke-width': 0,
          name: 'Row 6',
          category: 'default',
          block_id: 'e5fdaa4d-92c6-429c-a173-f15f4052471f',
          row_number: 6,
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [176.055764, -37.675168],
            [176.05588, -37.67545],
          ],
        },
        properties: {
          id: '85a9e7aa-b0f3-442c-90e6-6756ae2782d0',
          type: 'Row',
          fill: '#002DFF',
          'fill-opacity': 0.2,
          'stroke-width': 0,
          name: 'Row 7',
          category: 'default',
          block_id: 'e5fdaa4d-92c6-429c-a173-f15f4052471f',
          row_number: 7,
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [176.05579, -37.675161],
            [176.055916, -37.675479],
          ],
        },
        properties: {
          id: '1b74ca6a-28e4-4072-ae81-75b452a30197',
          type: 'Row',
          fill: '#002DFF',
          'fill-opacity': 0.2,
          'stroke-width': 0,
          name: 'Row 8',
          category: 'default',
          block_id: 'e5fdaa4d-92c6-429c-a173-f15f4052471f',
          row_number: 8,
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [176.055816, -37.675154],
            [176.055963, -37.675515],
          ],
        },
        properties: {
          id: '09439cbf-12a0-4509-bec0-139ab8d71661',
          type: 'Row',
          fill: '#002DFF',
          'fill-opacity': 0.2,
          'stroke-width': 0,
          name: 'Row 9',
          category: 'default',
          block_id: 'e5fdaa4d-92c6-429c-a173-f15f4052471f',
          row_number: 9,
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [176.055842, -37.675148],
            [176.056009, -37.675558],
          ],
        },
        properties: {
          id: '2f21bc0e-2cf2-4ea3-9454-4f125c15a0a4',
          type: 'Row',
          fill: '#002DFF',
          'fill-opacity': 0.2,
          'stroke-width': 0,
          name: 'Row 10',
          category: 'default',
          block_id: 'e5fdaa4d-92c6-429c-a173-f15f4052471f',
          row_number: 10,
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [176.055869, -37.675142],
            [176.056056, -37.675601],
          ],
        },
        properties: {
          id: '29f5e626-3503-4d29-a8ea-0c5cb83dfe93',
          type: 'Row',
          fill: '#002DFF',
          'fill-opacity': 0.2,
          'stroke-width': 0,
          name: 'Row 11',
          category: 'default',
          block_id: 'e5fdaa4d-92c6-429c-a173-f15f4052471f',
          row_number: 11,
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [176.055894, -37.675135],
            [176.056082, -37.675596],
          ],
        },
        properties: {
          id: 'f37bd236-d16d-490d-a3ac-6048b95936cb',
          type: 'Row',
          fill: '#002DFF',
          'fill-opacity': 0.2,
          'stroke-width': 0,
          name: 'Row 12',
          category: 'default',
          block_id: 'e5fdaa4d-92c6-429c-a173-f15f4052471f',
          row_number: 12,
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [176.055921, -37.675129],
            [176.056108, -37.675592],
          ],
        },
        properties: {
          id: '6ed0216e-46a5-4e02-8ae7-b7567255433a',
          type: 'Row',
          fill: '#002DFF',
          'fill-opacity': 0.2,
          'stroke-width': 0,
          name: 'Row 13',
          category: 'default',
          block_id: 'e5fdaa4d-92c6-429c-a173-f15f4052471f',
          row_number: 13,
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [176.055947, -37.675122],
            [176.056135, -37.675586],
          ],
        },
        properties: {
          id: '987de57a-4e6c-4860-bf6a-a886b2f8208e',
          type: 'Row',
          fill: '#002DFF',
          'fill-opacity': 0.2,
          'stroke-width': 0,
          name: 'Row 14',
          category: 'default',
          block_id: 'e5fdaa4d-92c6-429c-a173-f15f4052471f',
          row_number: 14,
        },
      },
    ],
  };
  const polygonLayerStyle: LayerProps = {
    id: 'polygons',
    type: 'fill',
    paint: {
      'fill-color': '#C0C0C0',  
      'fill-opacity': 0.3,  
    },
  };

  const lineLayerStyle: LayerProps = {
    id: 'lines',
    type: 'line',
    paint: {
      'line-color': '#00FF00',  
      'line-width': 2,
    },
  };

  return ( 
    <div className="flex flex-col w-[75%] max-md:ml-0 "> 
  <MapGL
    attributionControl={false}
    initialViewState={{
      longitude: 176.0555,
      latitude: -37.6752,
      zoom: 17.2,
    }}
    mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
    mapboxAccessToken={MAPBOX_TOKEN1} // Add your Mapbox token here 
  >
    <Source id="my-geojson" type="geojson" data={geojson}>
      <Layer {...polygonLayerStyle} />
      <Layer {...lineLayerStyle} />
    </Source>
  </MapGL>
</div>

  );
};

export default Map;
