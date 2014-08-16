# grunt-multi-dest

> Runs a list of specitified tasks against multiple destination directories.

[![Build Status](https://travis-ci.org/ErjanGavalji/grunt-multi-dest.svg?branch=master)](https://travis-ci.org/ErjanGavalji)

## Getting Started
This plugin requires Grunt `~0.4.5`

[![NPM](https://nodei.co/npm/grunt-multi-dest.png?compact=true)](https://nodei.co/npm/grunt-multi-dest/)

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-multi-dest --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-multi-dest');
```

## The "multi_dest" task

### Overview
In your project's Gruntfile, add a section named `multidest` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  multidest: {
    your_target: {
        tasks: [
            "your",
            "tasks"
        ]
    },
  },
});
```

### Usage Examples

#### Copy

```js
grunt.initConfig({

    copy: {
        somefiles: {
            src: "./mydir/**",
            dest: "./myNormallyOutputDir/"
        }
    },
    multidest: {
        copy_some_files: {
            tasks: [
                "copy:somefiles"
            ]
            dest: ["./dist/distdir1", "./dist/distdir2"]
        },
    },
});
```

### Important note
**As the multidest task does not operate on its own src files, it does not respect the expand option of its files attribute. That only applies to the expand option of the multidest task. The expand attribute of the tasks multidest runs works normally.**