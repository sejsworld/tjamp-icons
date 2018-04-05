var async = require('async');
var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');

var runTimestamp = Math.round(Date.now()/1000);
var fontName = 'tjamp-icons';
 
gulp.task('build', function(done){
    var iconStream = gulp.src(['SVG/*.svg'])
        .pipe(iconfont({ 
            fontName: fontName, // required
            prependUnicode: true, // recommended option
            formats: ['ttf', 'eot', 'woff', 'woff2'], // default, 'woff2' and 'svg' are available
            timestamp: runTimestamp, // recommended to get consistent builds when watching files
        }));
   
        async.parallel([
        function handleGlyphs (cb) {
            iconStream.on('glyphs', function(glyphs, options) {
            gulp.src('templates/' + fontName + '.css')
                .pipe(consolidate('lodash', {
                glyphs: glyphs,
                fontName: fontName,
                fontPath: '../fonts/',
                className: 'icon'
                }))
                .pipe(gulp.dest('css/'))
                .on('finish', cb);
            });
        },
        function handleFonts (cb) {
            iconStream
            .pipe(gulp.dest('fonts/'))
            .on('finish', cb);
        }
        ], done);
    });

gulp.task('default', function() {
  // place code for your default task here
});