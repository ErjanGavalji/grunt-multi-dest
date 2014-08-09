module.exports = function (grunt) {

   var distDirs = ["./dist/dist1/", "./dist/dist2/"];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        srcDir: "./src",
        distDirBase: "./dist",
        distDirs: [" <%= distDirBase %>/dist1", "<%= distDirBase %>/dist2"],
        clean: {
            distDir: {
                src: distDirs
            }
        },
        copy: {
            zeFiles:{
                expand: true,
                src: ["**"],
                cwd: "<%= srcDir %>",
                dest: distDirs
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");

   grunt.registerTask("default", [
        "clean:distDir",
        "copy:zeFiles"
    ]);

};
