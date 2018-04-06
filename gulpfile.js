var gulp =      require('gulp');
var svgSprite = require("gulp-svg-sprites");
var svgo =      require('gulp-svgo');

var fontName = 'tjamp-icons';


gulp.task('default', function() {

    return gulp.src('svg/*.svg')
    .pipe(svgo({
        plugins : [
            { removeStyleElement: true },
            { removeAttrs: {attrs: '(fill.*|stroke.*|transform.*|y.*)'} },
        ]
    }
    ))
    .pipe(svgSprite({
        baseSize: 32,
        mode: "symbols",
        svg: {
            sprite: "tjamp-icons.svg"
        }
    }))
    .pipe(gulp.dest("dist"));
});