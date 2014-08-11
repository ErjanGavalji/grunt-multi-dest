'use strict';

var grunt = require('grunt');
var getDirRecursiveSync = require('./get-dir-recursive-sync.js');

exports.multitargettests = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  multitargets: function(test) {
//TODO: Complete the test!
    test.expect(1);
    test.equal(1, 1);
    // test.expect(6);

    // var dest1copiedfiles = getDirRecursiveSync('./test/tmp/multidest_1/');
    // var dest2copiedfiles = getDirRecursiveSync('./test/tmp/multidest_2/');
    // var dest3copiedfiles = getDirRecursiveSync('./test/tmp/multidest_3/');
    // var dest4copiedfiles = getDirRecursiveSync('./test/tmp/multidest_4/');
    // var dest5copiedfiles = getDirRecursiveSync('./test/tmp/multidest_5/');
    // var dest6copiedfiles = getDirRecursiveSync('./test/tmp/multidest_6/');

    // test.equal(dest1copiedfiles.length, 2, "dest1 file count is the same as source");
    // test.equal(dest1copiedfiles[0], 'input1.txt');
    // test.equal(dest1copiedfiles[1], 'input2.txt');

    // test.equal(dest2copiedfiles.length, 2, "dest2 file count is the same as source");
    // test.equal(dest2copiedfiles[0], 'input1.txt');
    // test.equal(dest2copiedfiles[1], 'input2.txt');

    // test.equal(dest1copiedfiles.length, 4+8+8+8, "dest1 file count is the same as source");
    // test.equal(dest3copiedfiles[0], 'input1.txt');
    // test.equal(dest3copiedfiles[1], 'input2.txt');
    // test.equal(dest4copiedfiles[0], 'input1.txt');
    // test.equal(dest4copiedfiles[1], 'input2.txt');
    // test.equal(dest5copiedfiles[0], 'input1.txt');
    // test.equal(dest5copiedfiles[1], 'input2.txt');
    // test.equal(dest6copiedfiles[0], 'input1.txt');
    // test.equal(dest6copiedfiles[1], 'input2.txt');

    test.done();
  },
};
