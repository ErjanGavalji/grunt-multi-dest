'use strict';

var grunt = require('grunt');
var getDirRecursiveSync = require('./get-dir-recursive-sync');
var should = require('should');

var destination = [];

describe('Single Subtask', function(){
    before(function(){
        destination = getDirRecursiveSync('./test/tmp/');
    });

    describe('destination', function(){
        it('should contain no extra files', function(){
            destination.should.have.length(4);
        });

        it('should have files copied to exact locations', function(){
            destination.should.containEql('./test/tmp/multidest_1/test/fixtures/input1.txt');
            destination.should.containEql('./test/tmp/multidest_1/test/fixtures/input2.txt');
            destination.should.containEql('./test/tmp/multidest_2/test/fixtures/input1.txt');
            destination.should.containEql('./test/tmp/multidest_2/test/fixtures/input2.txt');
        });
    });

});

