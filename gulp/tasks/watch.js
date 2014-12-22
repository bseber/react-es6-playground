
var gulp       = require ('gulp');
var livereload = require ('gulp-livereload');
var config     = require ('../config').watch;


function tasks () {
    return Object.keys (config.tasks).map (function (name) {
        return {files: config.tasks[name], name: name};
    });
}

gulp.task ('watch', function () {

    tasks ().forEach (function (task) {
        gulp.watch (task.files, [task.name]);
    });

    livereload.listen();

    gulp.watch(config.livereload).on('change', livereload.changed);
});

