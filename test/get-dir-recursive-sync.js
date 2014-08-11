var fs = fs || require('fs');

var getDirRecursiveSync = function(dir, filelist) {

    var files = fs.readdirSync(dir);
    filelist = filelist || [];
    var fileLength = files.length;
    for (var i=0; i<fileLength; i++)
    {
        var file = files[i];
        if (fs.statSync(dir + file).isDirectory()) {
            filelist = getDirRecursiveSync(dir + file + '/', filelist);
        } else {
            filelist.push(file);
        }
    }
    return filelist;
};

module.exports = getDirRecursiveSync;
