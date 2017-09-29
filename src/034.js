module.exports = {
  description: 'Single Value with double type and a single Point feature',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L21',
  validity: {
    v1: true,
    v2: true
  },
  json: {
    layers: [
      {
        version: 2,
        name: 'hello',
        features: [
          {
            id: 1,
            tags: [0, 0],
            type: 1,
            geometry: [ 9, 50, 34 ]
          }
        ],
        keys: [
          'key1'
        ],
        values: [
          { double_value: 1.23 }
        ],
        extent: 4096
      }
    ]
  },
  proto: '2.1'
};
