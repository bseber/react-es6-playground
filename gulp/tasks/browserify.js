
var gulp       = require ('gulp');
var browserify = require ('browserify');
var to5ify     = require ('6to5ify');
var transform  = require ('vinyl-transform');
var uglify     = require ('gulp-uglify');
var config     = require ('../config').browserify;


gulp.task ('browserify', function () {

    var browserified = transform (function (filename) {
        return browserify(filename)
            // 6to5ify is not configurable with package.json like reactify & browserify-shim .___.
            .transform (to5ify.configure (config['6to5ify']))
            .bundle ();
    });

    return gulp.src (config.src)
        .pipe (browserified)
        .pipe (uglify ())
        .pipe (gulp.dest (config.dest));
});