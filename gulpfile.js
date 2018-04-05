var gulp =      require('gulp');
var svgSprite = require("gulp-svg-sprites");
var svgo =      require('gulp-svgo');

var fontName = 'tjamp-icons';


gulp.task('default', function() {

    return gulp.src('svg/*.svg')
    .pipe(svgo({
        plugins : [
            { removeStyleElement  : true },
            { removeAttrs: {attrs: '(fill.*|stroke.*|transform.*)'} }
        ]
    }
    ))
    .pipe(svgSprite())
    .pipe(gulp.dest("dist"));
});