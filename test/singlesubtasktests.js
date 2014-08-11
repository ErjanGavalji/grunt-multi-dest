'use strict';

var grunt = require('grunt');
var getDirRecursiveSync = require('./get-dir-recursive-sync');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.multidest_singlesubtasktests = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  singlesubtask: function(test) {
    test.expect(6);

    var dest1copiedfiles = getDirRecursiveSync('./test/tmp/multidest_1/');
    var dest2copiedfiles = getDirRecursiveSync('./test/tmp/multidest_2/');

    test.equal(dest1copiedfiles.length, 2, "dest1 file count is the same as source");
    test.equal(dest1copiedfiles[0], 'input1.txt');
    test.equal(dest1copiedfiles[1], 'input2.txt');
    test.equal(dest2copiedfiles.length, 2, "dest2 file count is the same as source");
    test.equal(dest2copiedfiles[0], 'input1.txt');
    test.equal(dest2copiedfiles[1], 'input2.txt');
    test.done();
  },
};
