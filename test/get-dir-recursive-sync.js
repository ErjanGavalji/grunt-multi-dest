'use strict'

var fs = fs || require('fs');

var getDirRecursiveSync = function(dir, filelist) {

    var files = fs.readdirSync(dir);
    filelist = filelist || [];
    var fileLength = files.length;
    for (var i=0; i<fileLength; i++)
    {
        var file = files[i];
        var path = dir + file;
        if (fs.statSync(path).isDirectory()) {
            filelist = getDirRecursiveSync(path + '/', filelist);
        } else {
            filelist.push(path);
        }
    }
    return filelist;
};

module.exports = getDirRecursiveSync;
