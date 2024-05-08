BSON ObjectId &nbsp;[![Build Status](https://travis-ci.org/williamkapke/bson-objectid.svg?branch=master)](https://travis-ci.org/williamkapke/bson-objectid)
=============

This module allows you to create and parse `ObjectId`s without a reference to the
[mongodb](https://github.com/mongodb/node-mongodb-native) or [bson](https://github.com/mongodb/js-bson)
modules.

The goal is to be 100% compatable with all [bson](https://github.com/mongodb/js-bson)'s
public API implementation (found here: https://github.com/mongodb/js-bson/blob/main/src/objectid.ts).

## Install
    $ npm install bson-objectid

## Usage
```javascript
var ObjectId = require("bson-objectid");

console.log(ObjectId());
console.log(ObjectId("54495ad94c934721ede76d90"));
console.log(ObjectId(1414093117));//time
console.log(ObjectId([ 84, 73, 90, 217, 76, 147, 71, 33, 237, 231, 109, 144 ]));
console.log(ObjectId(new Buffer([ 84, 73, 90, 217, 76, 147, 71, 33, 237, 231, 109, 144 ])));
```

### ObjectId()<br>ObjectId(time)<br>ObjectId(hexString)<br>ObjectId(idString)<br>ObjectId(array)<br>ObjectId(buffer)
Creates a new immutable `ObjectId` instance based on the current system time.

Possible arguments:<br>
**time** Constructs the instance based on the specified time (in seconds).<br>
**hexString** Constructs the instance from a 24 character hex string.<br>
**idString** Constructs the instance from a 12 byte string.<br>
**array** Constructs the instance from an `Array` of 24 bytes.<br>
**buffer** Constructs the instance from a 24 byte `Buffer` instance.<br>

#### id
**returns** the 12 byte id string.

#### str
#### toHexString()
**returns** the `ObjectId` represented as a 24 character hex string.

#### equals(other)
**returns** true if the `ObjectId`s represent the same underlying value. Otherwise false.
#### getTimestamp()
**returns** the generation `Date` (accurate up to the second) that this `ObjectId` was generated.

### ObjectId.createFromTime(time)
Creates an ObjectId from a time (in seconds) `Number`, with the rest of the `ObjectId` zeroed out. Used for comparisons or sorting the ObjectId.

### ObjectId.createFromHexString(hexString)
Creates an ObjectId from a 24 character hex string.

### ObjectId.isValid(hexString)<br>ObjectId.isValid(ObjectId)
Checks if a value is a valid `ObjectId` or 24 character hex string.
> THE NATIVE DOCUMENTATION ISN'T CLEAR ON THIS GUY!<br>
> See: http://mongodb.github.io/node-mongodb-native/api-bson-generated/objectid.html#objectid-isvalid

## Test
    mocha

or

    npm test

License
=======
Apache v2.0

See LICENSE file.

Special callout to [@feross](https://github.com/feross) for the [is-buffer](https://github.com/feross/is-buffer) code
used internally to avoid Buffer from being loaded in browserify environments.
