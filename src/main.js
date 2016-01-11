'use strict';

define(['rx', '@cycle/core', '@cycle/dom', 'esri/Map', 'esri/views/MapView', 'esri/layers/VectorTileLayer'], function (_rx, _core, _dom, _Map, _MapView, _VectorTileLayer) {
  var _rx2 = _interopRequireDefault(_rx);

  var _core2 = _interopRequireDefault(_core);

  var _Map2 = _interopRequireDefault(_Map);

  var _MapView2 = _interopRequireDefault(_MapView);

  var _VectorTileLayer2 = _interopRequireDefault(_VectorTileLayer);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function main(_ref) {
    var DOM = _ref.DOM;
    var tileLyr = new _VectorTileLayer2.default({
      url: "https://www.arcgis.com/sharing/rest/content/items/f96366254a564adda1dc468b447ed956/resources/styles/root.json"
    });
    var map = new _Map2.default({
      layers: [tileLyr]
    });
    var view = new _MapView2.default({
      container: "viewDiv",
      map: map,
      zoom: 4,
      center: [15, 65],
      ui: {
        components: []
      }
    });
    var changeZoom$ = DOM.select('#zoom').events('input').map(function (_ref2) {
      var target = _ref2.target;
      return target.value;
    }).startWith(4).map(function (value) {
      view.zoom = value;
      return value;
    });
    return {
      DOM: changeZoom$.map(function (value) {
        return (0, _dom.div)([(0, _dom.div)(['Zoom Level', (0, _dom.input)('#zoom', {
          type: 'range',
          min: 1,
          max: 23,
          value: value
        })]), (0, _dom.h4)('Current Zoom: ' + value)]);
      })
    };
  }

  _core2.default.run(main, {
    DOM: (0, _dom.makeDOMDriver)('#app-container')
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmVzNiIsInNvdXJjZXNDb250ZW50IjpbXX0=