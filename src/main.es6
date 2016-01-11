import Rx  from 'rx';
import Cycle from '@cycle/core';
import { div, input, h4, makeDOMDriver } from '@cycle/dom';
import Map from 'esri/Map';
import MapView from 'esri/views/MapView';
import VectorTileLayer from 'esri/layers/VectorTileLayer';

function main({ DOM }) {

  const tileLyr = new VectorTileLayer({
    url: "https://www.arcgis.com/sharing/rest/content/items/f96366254a564adda1dc468b447ed956/resources/styles/root.json"
  });

  const map = new Map({
    layers: [ tileLyr ]
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    zoom: 4,
    center: [15, 65],
    ui: {
      components: []
    }
  });

  const changeZoom$ = DOM.select('#zoom')
  .events('input')
  .map(({ target }) => target.value)
  .startWith(4)
  .map(value => {
    view.zoom = value;
    return value;
  });

  return {
    DOM: changeZoom$.map(value =>
      div([
        div([
          'Zoom Level',
          input('#zoom', { type: 'range', min: 1, max: 23, value })
        ]),
        h4('Current Zoom: ' + value)
      ])
    )
  };
}

Cycle.run(main, {
  DOM: makeDOMDriver('#app-container')
});