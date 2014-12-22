
var pkg = require ('../package.json');

var src  = './src';
var dest = './dist';
var tmp  = './tmp';


module.exports = {

    clean: {
        files: [dest, tmp]
    },

    copy: {
        src: src + '/index.html',
        dest: dest
    },

    browserify: {
        src : src + '/main.js',
        dest: dest,
        '6to5ify': pkg['6to5ify']
    },

    watch: {
        tasks: {
            browserify: [
                src + '/jsx/**/*.jsx',
                src + '/app/*.js',
                src + '/main.js'
            ]
        },
        livereload: [
            dest + '/**'
        ]
    }

};