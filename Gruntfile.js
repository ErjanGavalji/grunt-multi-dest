/*
 * grunt-multi-dest
 * https://github.com/ErjanGavalji/grunt-multi-dest
 *
 * Copyright (c) 2014 Erjan Gavalji
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= simplemocha.singlesubtasktests.src %>',
        '<%= simplemocha.multitargettests.src %>',
        '<%= simplemocha.multifilestests.src %>'
        ],
      options: {
        jshintrc: '.jshintrc',
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['./test/tmp/']
    },

    copy: {
        testFiles: {
            src: [
                './test/fixtures/input1.txt',
                './test/fixtures/input2.txt'
            ],
            dest: './test/tmp/normaldestination/'
        },
        otherTestFiles: {
            expand: true,
            cwd: './test/fixtures/',
            src: [
                './input3.txt',
                './input4.txt'
            ]
        },
        multiTestFiles: {
            expand: true,
            cwd: './test/fixtures/multifiles/',
            src: ['./**']
        }
    },

    // Configuration to be run (and then tested).
    multidest: {
        copyOperation: {
            tasks: [
                'copy:testFiles'
            ],
            dest: ['./test/tmp/multidest_1/', './test/tmp/multidest_2/']
        },
        multifiles: {
            files: [
            //TODO: Add an entry to the readme, that expand does not work!
                {dest: ['./test/tmp/multidest_3/', './test/tmp/multidest_4/']},
                {dest: ['./test/tmp/multidest_5/', './test/tmp/multidest_6/']}
            ],
            tasks: [
                'copy:testFiles',
                'copy:otherTestFiles',
                'copy:multiTestFiles'
            ]
        }
    },

    // Unit tests.
    simplemocha: {
        options: {
            globals: ['should'],
            timeout: 3000,
            ignoreLeaks: false,
//            grep: '*',
            ui: 'bdd',
            reporter: 'spec'
        },
        singlesubtasktests: { src: ['./test/singlesubtasktests.js'] },
        multitargettests: { src: ['./test/multitargettests.js'] },
        multifilestests: { src: ['./test/multifilestests.js'] }
    },
    
    watch: {
        default:
        {
            tasks: [
                "default"
            ],
            files: ["./test/fixtures/**"],
            options: {
                spawn: false
            }
        }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', [
    'clean',
    'multidest:copyOperation',
    'simplemocha:singlesubtasktests',
    'clean',
    'multidest',
    'simplemocha:multitargettests',
    'clean',
    'multidest:multifiles',
    'simplemocha:multifilestests']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
