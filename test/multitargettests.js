'use strict';

var grunt = require('grunt');
var getDirRecursiveSync = require('./get-dir-recursive-sync');
var should = require('should');

var destination;

describe('All tasks of all targets of the multidest task with multiple `files` defined', function(){
    before(function(){
        destination = getDirRecursiveSync('./test/tmp/');
    });

    describe('destination', function(){
        it('should contain no extra files', function(){
            destination.should.have.length(36);
        });

        it('should have the copyOperation files copied', function(){
            destination.should.containEql('./test/tmp/multidest_1/test/fixtures/input1.txt');
            destination.should.containEql('./test/tmp/multidest_1/test/fixtures/input2.txt');
            destination.should.containEql('./test/tmp/multidest_2/test/fixtures/input1.txt');
            destination.should.containEql('./test/tmp/multidest_2/test/fixtures/input2.txt');
        });

        it('should have first dest-set files copied to exact locations', function(){
            destination.should.containEql('./test/tmp/multidest_3/test/fixtures/input1.txt');
            destination.should.containEql('./test/tmp/multidest_3/test/fixtures/input2.txt');
            destination.should.containEql('./test/tmp/multidest_4/test/fixtures/input1.txt');
            destination.should.containEql('./test/tmp/multidest_4/test/fixtures/input2.txt');

            destination.should.containEql('./test/tmp/multidest_3/input3.txt');
            destination.should.containEql('./test/tmp/multidest_3/input4.txt');
            destination.should.containEql('./test/tmp/multidest_4/input3.txt');
            destination.should.containEql('./test/tmp/multidest_4/input4.txt');

            destination.should.containEql('./test/tmp/multidest_3/input5.txt');
            destination.should.containEql('./test/tmp/multidest_3/input6.txt');
            destination.should.containEql('./test/tmp/multidest_3/subdir/input7.txt');
            destination.should.containEql('./test/tmp/multidest_3/subdir/input8.txt');
            destination.should.containEql('./test/tmp/multidest_4/input5.txt');
            destination.should.containEql('./test/tmp/multidest_4/input6.txt');
            destination.should.containEql('./test/tmp/multidest_4/subdir/input7.txt');
            destination.should.containEql('./test/tmp/multidest_4/subdir/input8.txt');

        });

        it('should have second dest-set files copied to exact locations', function(){
            destination.should.containEql('./test/tmp/multidest_5/test/fixtures/input1.txt');
            destination.should.containEql('./test/tmp/multidest_5/test/fixtures/input2.txt');
            destination.should.containEql('./test/tmp/multidest_6/test/fixtures/input1.txt');
            destination.should.containEql('./test/tmp/multidest_6/test/fixtures/input2.txt');

            destination.should.containEql('./test/tmp/multidest_5/input3.txt');
            destination.should.containEql('./test/tmp/multidest_5/input4.txt');
            destination.should.containEql('./test/tmp/multidest_6/input3.txt');
            destination.should.containEql('./test/tmp/multidest_6/input4.txt');
 
            destination.should.containEql('./test/tmp/multidest_5/input5.txt');
            destination.should.containEql('./test/tmp/multidest_5/input6.txt');
            destination.should.containEql('./test/tmp/multidest_5/subdir/input7.txt');
            destination.should.containEql('./test/tmp/multidest_5/subdir/input8.txt');
            destination.should.containEql('./test/tmp/multidest_6/input5.txt');
            destination.should.containEql('./test/tmp/multidest_6/input6.txt');
            destination.should.containEql('./test/tmp/multidest_6/subdir/input7.txt');
            destination.should.containEql('./test/tmp/multidest_6/subdir/input8.txt');

        });
    });

});

