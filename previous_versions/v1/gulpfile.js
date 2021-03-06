const gulp = require('gulp');

const sass = require('gulp-sass');
sass.compiler = require('node-sass');

const fileinclude = require('gulp-file-include');
const concat = require('gulp-concat');

const browserSync = require('browser-sync').create();

gulp.task('scripts', function () {
    return gulp.src([
        './src/js/*.js',
        '!./src/js/main.js'
    ])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./src/js/'));
});

gulp.task('pages', function () {
    return gulp.src([
        './src/index.html'
    ])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('styles', function () {
    return gulp.src('./src/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css/'));
});

gulp.task(
    'devServer',
    function () {
        browserSync.init({
            server: "./"
        });

        gulp.watch([
            './src/*.html',
            './src/scss/*.scss',
            './src/js/*.js',
            '!./src/js/main.js'
        ],
            { ignoreInitial: false },
            gulp.series('styles', 'scripts', 'pages')
        );

        gulp.watch([
            './index.html'
        ]).on('change', browserSync.reload);
    }
);

gulp.task(
    'default',
    gulp.series('styles', 'scripts', 'pages')
);
