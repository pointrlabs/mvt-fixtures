# create

Create a tile fixture from a protocol buffer schema object representing the
Mapbox Vector Tile schema.

**Parameters**

-   `object` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the json schema object to generate against the Mapbox Vector Tile Specification protocol (see src/ for examples)
-   `json`  
-   `schema` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** a .proto file string to generate a buffer from. It can be either a version of the Mapbox Vector Tile Specification
    or a string representing a full and complete .proto file (to create invalid tiles)

**Examples**

```javascript
const mvtf = require('@mapbox/mvt-fixtures');

const fixture = {
  layers: [
    {
      version: 2,
      name: 'hello',
      features: [
        {
          id: 1,
          tags: [],
          type: 1,
          geometry: [ 9, 50, 34 ]
        }
      ],
      keys: {},
      values: {},
      extent: 4096
    }
  ]
}

const buffer = mvtf.create(fixture);
```

Returns **[Buffer](https://nodejs.org/api/buffer.html)** buffer - a protocol buffer representing a Mapbox Vector Tile

# each

Loops through all fixtures and provides the fixture object from get()

**Parameters**

-   `function` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** a synchronously running function to execute on each fixture
-   `fn`  

**Examples**

```javascript
const mvtf = require('mvt-fixtures');
const assert = require('assert');

mvtf.each(function(fixture) {
  assert.ok(Buffer.isBuffer(fixture.buffer), 'is a buffer');
});
```

# get

Get a fixture by name

**Parameters**

-   `id` **([String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)\|[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number))** the id of the fixture as specified in [FIXTURES.md](FIXTURES.md)

**Examples**

```javascript
const mvtf = require('mvt-fixtures');

const fixture = mvtf.get('001');
console.log(fixture.id); // => '001'
console.log(fixture.description); // => ...
console.log(fixture.specification_reference); // => url to Mapbox Vector Tile specification reference
console.log(fixture.buffer); // => Buffer object
console.log(fixture.json); // => json representation of the fixture
```

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** fixture - a fixture object