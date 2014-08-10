'use strict';

var grunt = require('grunt');

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

var walkSync = function(dir, filelist) {
    var fs = fs || require('fs'),
    files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function(file) {
        if (fs.statSync(dir + file).isDirectory()) {
            filelist = walkSync(dir + file + '/', filelist);
        } else {
            filelist.push(file);
        }
    });
    return filelist;
};

exports.multi_dest = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(2);

    var sourcefiles = walkSync('test/fixtures/');
    var dest1copiedfiles = walkSync('test/tmp/multidest_1/');
    var dest2copiedfiles = walkSync('test/tmp/multidest_2/');


//    var actual = grunt.file.read('test/tmp/default_options');
//    var expected = grunt.file.read('test/expected/default_options');
//    test.equal(actual, expected, 'should describe what the default behavior is.');
    test.equal(dest1copiedfiles.length, sourcefiles.length, "dest1 file count is the same as source");
    test.equal(dest2copiedfiles.length, sourcefiles.length, "dest2 file count is the same as source");
    test.done();
  },
};
