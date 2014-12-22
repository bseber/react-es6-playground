
var gulp   = require ('gulp');
var del    = require ('del');
var config = require ('../config').clean;


gulp.task ('clean', function () {
    // cleanup should be synchronous so other tasks
    // have a clean working directory
    return del.sync (config.files);
});
