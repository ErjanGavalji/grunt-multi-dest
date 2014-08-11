'use strict';

var grunt = require('grunt');
var getDirRecursiveSync = require('./get-dir-recursive-sync.js');

exports.multifilestests = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  multifiles: function(test) {
    test.expect(1);
    test.equal(1, 1);

    //TODO: Complete the test!

    test.done();
  },
};
