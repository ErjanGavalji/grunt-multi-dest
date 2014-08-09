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
                cwd: "<%= srcDir %>/",
                dest: distDirs,//"<%= distDirBase %>/"
            }
        },
        multiOutput: {
            initialTasks: {
                tasks: [
                    "clean:distDir",
                    "copy:zeFiles"
                ],
                dest: ["<%= distDirBase %>/dist1A", "<%= distDirBase %>/dist2B"]
            },
            otherTasks: {
                tasks : [
                    "clean:distDir"
                ],
                dest: ["./aa/bb", "./cc/dd"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");

    grunt.registerMultiTask("multiOutput", "Runs the specified tasks and outputs the results to multiple directories", function(){
        var destDirs = this.files[0].dest;
        var subTasks = this.data.tasks;

        var newTaskList = [];
        var newTaskName = "multiOutput_Child";

        for (var i=0; i<destDirs.length; i++)
        {
            var destDir = destDirs[i];
            for (var k=0; k<subTasks.length; k++)
            {
                var subTask = subTasks[k];

                var subTaskSplit = subTask.split(":");
                var originalSubTaskConfig = grunt.config(subTaskSplit);

                subTaskSplit[1] = subTaskSplit[1] + "_" + i + "_" + k;

                var newTaskConfig = grunt.util._.clone(originalSubTaskConfig);
                newTaskConfig.dest = destDir;
                grunt.config(subTaskSplit, newTaskConfig);

                newTaskList.push(subTaskSplit.join(":"));
            }
        }

        grunt.registerTask(newTaskName, newTaskList);
        grunt.task.run(newTaskName);
    });

    grunt.registerTask("default", [
        "multiOutput:initialTasks"
    ]);

};
