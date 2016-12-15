var gulp = require('gulp');
var stylus = require('gulp-stylus');
var pug = require('gulp-pug');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('callbackCss', function () {
    // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event 
    return watch('src/css/estilos.styl', function () {
        gulp.src('src/css/estilos.styl')
            .pipe(stylus({
              compress: true
            }))
            .pipe(autoprefixer())
            .pipe(rename('estilos.css'))
            .pipe(gulp.dest('css'));
    });
});

gulp.task('callback', function () {
    // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event 
    return watch('src/home/index.pug', function () {
        gulp.src('src/home/index.pug')
            .pipe(pug())
            .pipe(rename('index.php'))
            .pipe(gulp.dest('./'));
    });
});

gulp.task('callbackHead', function () {
    // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event 
    return watch('src/head/head.pug', function () {
        gulp.src('src/head/head.pug')
            .pipe(pug())
            .pipe(rename('head.php'))
            .pipe(gulp.dest('./'));
    });
});

gulp.task('default', ['callbackCss', 'callback', 'callbackHead'])


